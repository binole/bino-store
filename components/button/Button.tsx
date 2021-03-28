import React from 'react'

type ButtonProps = {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className = '', children }) => {
  return (
    <button className={`${className} px-6 py-3 font-bold text-white uppercase transition-colors bg-gray-800 rounded-full hover:bg-gray-900`}>{children}</button>
  )
}

export default Button
