import React from 'react';

const Article = (props) => {
    return (
        <div className="col-lg-4 latest-news-article">
            <div className="image-container">
                <img src={props.imageUrl} alt="" />
            </div>
            <div className="text-container">
                <div className="title">
                    {props.title}
                </div>
                <div className="content">
                    {props.content}
                </div>
            </div>
            
        </div>
    );
}
export default Article;
