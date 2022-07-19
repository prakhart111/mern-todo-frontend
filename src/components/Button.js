import React from 'react'

const Button = (props) => {
  return (
    <button 
        className={!props.del ? `m-1 rounded bg-[#C620A7] p-2 pl-5 pr-5 text-sm text-white`
        : `m-1 rounded bg-inherit p-2 pl-5 pr-5 text-sm text-gray-400 hover:text-[#C620A7] hover:font-bold`}
        onClick={props.onClick}
        name={props.name || 'button'}
    >
        {props.text}
    </button>
  )
}

export default Button