import React, { useState } from 'react'

import Name from './Name'
import Desc from './Desc'

const NewPost = ({ setPosts, posts }) => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  return (
    <>
      <div>
        <div className="card w-50">
          <Name setName={setName} name={name} />
          <Desc setDesc={setDesc} desc={desc} />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (name && desc) {
              setPosts([...posts, { name, desc }])
              setName('')
              setDesc('')
            }
          }}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default NewPost
