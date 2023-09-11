import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookMarks , setBookMarks]  = useState([]);

  const handleAddToBookMark = (blog) =>{
    const newBookMarks = [...bookMarks , blog];
    setBookMarks(newBookMarks);

  }

  return (
    <>
      <div className='px-20'>
        <Header></Header>
      </div>

      <main className='md:flex max-w-7xl mx-auto mt-10'>
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </main>
    </>
  )
}



export default App
