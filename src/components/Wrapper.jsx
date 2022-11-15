import React, { Children } from 'react'

const Wrapper = (Children) => {
  return <div className='grid grid-cols-2 gap-1'>{Children}</div>;
}

export default Wrapper



