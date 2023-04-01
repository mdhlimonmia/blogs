import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import Blogs from '../Blogs';

const Blog = (props) => {

    const {author_name, id, tittle, cover_img, author_img, published_date, read_time, tag}=props.blog;
    return (
        <div className='blog-container'>
            <img className='cover-img' src={cover_img} alt="" />
            <div className='blog'>
                <div className='author'>
                    <img src={author_img} alt="" />
                    <div>
                        <p>{author_name}</p>
                        <p>{published_date} </p>
                    </div>
                </div>
                <div>
                    <p>{read_time} min read <FontAwesomeIcon onClick={() =>props.addBookMark(props.blog)} icon={faBookmark} /></p>
                </div>
            </div>
            <h2>{tittle}</h2>
            <p> {tag} </p>
            <button  onClick={() => props.readTime(read_time)} ><u>Mark as read</u></button>
            <br />
            <br />
            <hr />
        </div>
    );
};

export default Blog;