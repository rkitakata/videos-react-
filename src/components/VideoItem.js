import React from 'react'
import VideoList from './VideoList'
import './VideoItem.css'


function VideoItem({video, onVideoSelect}) {
    return (
        <div onClick={()=>onVideoSelect(video)} className="video-item item">
            <img alt={video.snippet.title}
             className="ui image" 
             src = {video.snippet.thumbnails.medium.url} />
            <div className = "content">
                {video.snippet.title}
            </div>
        </div>
    )
}

export default VideoItem
