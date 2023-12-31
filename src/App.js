import React, { useEffect, useState } from 'react';
import Header from './views/Header'
import Content from './views/content.js'
import Titleimg from './views/titleimg';
function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);


  return (
    <div>
      <Header />
    <Titleimg />
      <Content />

      
    </div>
  )
}

export default App;


/*

    <div>
      {(typeof backendData.users === 'undefined') ? (
       <p>Loading...</p> 
      ) : (
        backendData.users.map((user,i) => (
          <p key={i}>{user}</p>
        ))
      )}

       
    </div>
*/
