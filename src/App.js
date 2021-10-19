import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Title from './components/Title'
import NewPost from './components/NewPost'
import Post from './components/Post'

const App = () => {
  const [posts, setPosts] = useState([])
  return (
    <>
      <div className="container">
        <Title />
        <h2><u> Write a new Post! </u></h2>
        <NewPost setPosts={setPosts} posts={posts} />
        <br />
        <h2><u> FEED </u></h2>
        {posts.map(post => <Post {...post} key={uuidv4()} />)}
      </div>
    </>
  )
}
export default App
