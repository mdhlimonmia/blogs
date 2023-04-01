import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css'
import { toast } from 'react-hot-toast';

const Blogs = () => {
    const [blogs, setBlogs]=useState([]);
    
    const [blogHistory, setBlogHistory] = useState([]);
    useEffect( ()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data));
    },[])

    const addBookMark = (blog)=>{
        // console.log(blog);
        
        const exitsBlog = blogHistory?.find(history => history.id===blog.id);
        if(!exitsBlog){
            // console.log(blog);
            // console.log("NAI");
            const newBlog = [...blogHistory, blog];
            setBlogHistory(newBlog);
          
            
        }
        else{
            // console.log("ACE");
          return  toast.error("Already Bookmarked.")

        }
    }
    console.log(blogHistory);
    return (
        <div className='blogs-container'>
            <div className="bogs">
                {
                    blogs.map(blog => <Blog 
                        blog = {blog}
                        addBookMark = {addBookMark}
                        key = {blog.id}></Blog>)
                }
            </div>
            <div>
                <div className='blogs-time'>
                    <p >Spent time on read :</p>
                </div>
                <div className="blogs-history">
                    <h3>Bookmarked Blogs:</h3>
                        {/* <p>Next.js tutorial with examples: Build better React apps with Next</p> */}
                        {
                            blogHistory.map(history => <div key = {history.id}>{history.tittle}</div>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Blogs;