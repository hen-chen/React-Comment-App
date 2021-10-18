import React, { useState, useEffect } from 'react'
 
import Title from './components/Title'
import NewPost from './components/NewPost'
import Posts from './components/Posts'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])
  return (
    <>
      <div className="center">
        <Title />
        <NewPost setPosts={setPosts} posts={posts}/>
        <Posts posts={posts}/>
      </div>
    </>
  )
}
export default App