import React from 'react';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog,handleBookmarked,handleReadingTime}) => {
    // console.log(blog);
    const { author, cover, title, author_img,hashtags,reading_time,id } = blog;
    return (
        <div className='mt-5'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={cover}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <button onClick={()=>handleBookmarked(blog)}><IoBookmarksOutline size={35}/></button>
    <div className="author flex items-center justify-around">
        <h1 className='font-bold'>Author Name: {author}</h1>
        <img className='w-14' src={author_img} alt="" />
    </div>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="tags flex">
        {
            hashtags.map((tag)=> <p>{tag}</p>)
        }
    </div>
    <h4 className='font-semibold'>Reading time: {reading_time}</h4>
    <div className="card-actions justify-end">
    

      <button onClick={()=>handleReadingTime(reading_time,id)} className="btn btn-primary">Mark as Read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;