
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks,setBookmarks] =useState([]);
  const [readingTime,setReadingTime] = useState(0)

  const handleMarkAsRead =(id,time) =>{
    const newReadingTime =readingTime+time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove bookmark:',id)
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  const handleAddToBookMark=blog =>{
    const newBookmark =[...bookmarks,blog];
    setBookmarks(newBookmark);
  }

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookMark={handleAddToBookMark}></Blogs>
     <Bookmarks 
     readingTime={readingTime}
     bookmarks={bookmarks}
     ></Bookmarks>
     </div>
    </>
  )
}

export default App
