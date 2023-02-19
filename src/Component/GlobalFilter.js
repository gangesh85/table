import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <span>
       <strong>Search Page:</strong> {' '}
        <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </span>
  )
}
