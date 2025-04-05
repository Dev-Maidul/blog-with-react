import { useEffect, useState } from "react";
import Blog from "./Blog";



const Blogs = ({handleBookmarked,handleReadingTime}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]);
    // console.log(blogs);
    return (
        <div>
            <h1 className="text-2xl">Available Blogs: {blogs.length}</h1>
            <div className="blog-container grid grid-cols-2">
                    {
                    blogs.map((blog)=> <Blog handleBookmarked={handleBookmarked} blog={blog} handleReadingTime={handleReadingTime}></Blog>)
                    }
            </div>
        </div>
    );
};

export default Blogs;