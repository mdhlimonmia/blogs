import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css'
import { toast } from 'react-hot-toast';

const Blogs = () => {
    const [blogs, setBlogs]=useState([]);

    const [time, setTime] = useState(0);

    const [blogHistory, setBlogHistory] = useState([]);
    useEffect( ()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data));
    },[])

    const addBookMark = (blog)=>{
       const exitsBlog = blogHistory?.find(history => history.id===blog.id);
        if(!exitsBlog){
            const newBlog = [...blogHistory, blog];
            setBlogHistory(newBlog);         
        }
        else{
          return  toast.error("Already Bookmarked.")

        }
    }

    const readTime = (getTime)=>{
        const newTime = time + parseInt(getTime);
        setTime(newTime);
    }
    return (
        <div className='blogs-container'>
            <div className="bogs">
                {
                    blogs.map(blog => <Blog 
                        blog = {blog}
                        addBookMark = {addBookMark}
                        readTime = {readTime}
                        key = {blog.id}></Blog>)
                }
            </div>
            <div>
                <div className='blogs-time'>
                    <p >Spent time on read : {time} min</p>
                </div>
                <div className="blogs-history">
                    <h3>Bookmarked Blogs: {blogHistory.length}</h3>
                        {
                            blogHistory.map(history => <div key = {history.id}>{history.tittle}</div>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Blogs;