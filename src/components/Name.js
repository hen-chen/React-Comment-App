import React from 'react'

const Name = ({ setName, name }) => <input onChange={e => setName(e.target.value)} placeholder="Name..." value={name} />

export default Name
