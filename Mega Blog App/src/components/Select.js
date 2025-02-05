import React, {forwardRef, useId} from 'react'

function select({
    Options,
    label,
    className = "",
    ...props
}, ref) {
   const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''>
            
            </label>}
            <select {...props}
            id={id}
            ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
                {Options?.map((Option) => (<Option key={Option} value={Option}>
                    {Option}
                    </Option>))}
            </select>
    </div>
  )
}
// Easy way to use forwardRef
export default React.forwardRef(select)