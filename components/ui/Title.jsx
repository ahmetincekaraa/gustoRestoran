import React from 'react'

const Title = ({children, addClass}) => {
  return (
    <div className={`${addClass} font-Lora font-bold`}>{children}</div>
  )
}

export default Title