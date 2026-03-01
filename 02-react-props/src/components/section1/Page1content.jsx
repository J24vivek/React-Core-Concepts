import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='py-3 px-18 h-[85vh] my-3 flex gap-10'>
 
        <LeftContent />
        <RightContent users={props.users}  />
    </div>
  )
}

export default Page1content
