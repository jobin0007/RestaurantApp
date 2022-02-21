import React from 'react'

function Rating({data}) {
  return (
    <div>
        {data.map(item => (
        <>
        <h6>{item.name}</h6>
        <p>{item.comments}</p>
        </>
        ))}
        </div>
  )
}

export default Rating