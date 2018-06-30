import React,{Component} from 'react';
import PropTypes from 'prop-types';

import './Preview.css';
//React.PropTypes助手函数已被弃用
class Preview extends Comment{
    render(){
        return (
            <article className="article-preview-item">
                <h1 className="title">{this.props.title}</h1>
                <span className="date">{this.props.date}</span>
                <p className="desc">{this.props.description}</p>
            </article>
        );
    }
}

Preview.propTypes = {
    title: PropTypes.string
};

export default Preview;