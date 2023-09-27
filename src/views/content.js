import React, { useEffect, useState } from 'react';
import '../css/content.css';
import Titleimg from './titleimg';
// 抽取成一个独立的函数
function renderMaps(backendData) {
    return Object.keys(backendData).map((key, i) => (
        
            <div className='maps-container'>
                <div key={i} className='maps_box'>
                    <div className='title-image'>
                        <img
                            src={backendData[key].img_url} // 使用 API 数据中的 img_url 属性作为图像的 URL
                            alt={backendData[key].title}   // 使用 API 数据中的 title 属性作为图像的 alt 文本
                            style={{
                                width: '100%',          // 图片宽度等于 maps_box 的宽度
                                height: '70%',          // 图片高度等于 maps_box 高度的一半
                                objectFit: 'fill',     // 可根据需要调整图片的填充方式
                                borderTopLeftRadius: '4px',  // 左上角圆角
                                borderTopRightRadius: '10px', // 右上角圆角
                            }}
                        />
                    </div>
                    <p><strong>{backendData[key].title}</strong></p>
                    <p>{backendData[key]['dep:']}</p>
                    <p>{backendData[key].starts}</p>
                    <div>
                        {backendData[key].tags.map((tag, j) => (
                            <span key={j} className="tag_box">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
       



    ));
}

const Content = () => {
    const [backendData, setBackendData] = useState({});

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data.Maps);
            }
        )
    }, []);

    return (
        <div>
            {(Object.keys(backendData).length === 0) ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {Titleimg}
                    {renderMaps(backendData)}
                </div>
            )}
        </div>
    );
}

export default Content;
