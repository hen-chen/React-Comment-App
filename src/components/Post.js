import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import NewPost from './NewPost'

const Post = ({ name, desc, depth }) => {
  const [replies, setReplies] = useState([])
  const [votes, setVotes] = useState(0)
  const [replyButton, setReplyButton] = useState(false)

  return (
    <div className={`container ml-${(depth || 0).toString()} border`}>
      <h3 style={{ color: 'DeepSkyBlue' }}>
        {name}
      </h3>
      <h5 style={{ color: 'darkgray' }}>
        {desc}
      </h5>
      <button type="button" className="btn btn-success" onClick={() => setVotes(votes + 1)}> Upvote </button>
      <button type="button" className="btn btn-Danger" onClick={() => setVotes(votes - 1)}> Downvote </button>
      <p style={(votes > 0) ? { color: 'green' } : { color: 'red' }}>
        {votes}
      </p>
      {(depth || 0) < 2 && (<button type="button" className="btn btn-secondary btn-sm" onClick={() => setReplyButton(!replyButton)}> Reply </button>)}
      {replies.map(reply => <Post {...reply} depth={(depth || 0) + 1} key={uuidv4()} />)}
      {(depth || 0) < 2 && replyButton && <NewPost setPosts={setReplies} posts={replies} />}
    </div>
  )
}

export default Post
