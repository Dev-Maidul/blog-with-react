import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Nav from "./Components/Navbar/Nav";


const App = () => {
  const [mark,setMark]=useState([]);

  const [readTime,setreadTime]=useState(0);

  const handleBookmarked=(blog)=>{
    setMark([...mark,blog])
  }
  
  const handleReadingTime=(time,id)=>{
    setreadTime(readTime+time);
    handleRemoveBookmark(id);
  }

  const handleRemoveBookmark=(id)=>{
    const remainingMarked= mark.filter((book)=> book.id!==id);
    setMark(remainingMarked);
  }


  return (
    <div>
      <Nav></Nav>
      <div className="blog-container flex mt-5 justify-center">
        <div className="blog-left w-[70%] text-center ml-10">
        <Blogs 
        handleBookmarked={handleBookmarked}
        handleReadingTime={handleReadingTime}></Blogs>
        </div>
        <div className="blog-right w-[30%] mr-10">
          <h1 className="text-2xl">Reading Time: {readTime}</h1>
          <h1 className="text-2xl">Bookmark: {mark.length}</h1>
          {
            mark.map((blog)=> <p className="bg-gray-400 m-5 rounded-2xl p-4">{blog.title}</p>)
          }
        </div>
      </div>
    </div>
  );
};

export default App;