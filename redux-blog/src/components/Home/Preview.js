/**
 * @description: 文章预览组件
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';

import './Preview.less';
//React.PropTypes助手函数已被弃用
class Preview extends Component{
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
    title: PropTypes.string,
    link: PropTypes.string
};

export default Preview;