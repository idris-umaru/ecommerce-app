import React from 'react'
import './Title.css'

const Title = ({ text1, text2 }) => {
  return (
    <div className="title">
      <span className="title-text1">{text1}</span>{' '}
      <span className="title-text2">{text2}</span>
      <div className="title-underline" />
    </div>
  )
}

export default Title