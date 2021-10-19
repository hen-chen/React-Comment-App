import React from 'react'

const Desc = ({ setDesc, desc }) => <textarea onChange={e => setDesc(e.target.value)} placeholder="Write a new post..." value={desc} />

export default Desc
