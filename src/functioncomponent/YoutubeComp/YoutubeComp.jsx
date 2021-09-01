import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="http://i3.ytimg.com/vi/YZ5PG07lTZI/maxresdefault.jpg" alt="img1" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    ) ;
}

YoutubeComp.defaultProps = {
    time: '00:00',
    title: 'Unknow Title',
    desc: 'Unknow Desc in here'
}

export default YoutubeComp;