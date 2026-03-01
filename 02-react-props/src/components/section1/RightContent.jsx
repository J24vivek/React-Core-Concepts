import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
     <div id='Cardflow' className='flex flex-nowrap overflow-x-auto gap-5 h-full w-3/4 pt-6 pb-6'>
        {props.users.map(function(elem, index){
          return <RightCard key={elem.id} img={elem.image} text={elem.description} tag={elem.tag} index={index} />
        })}
    </div>
  ) 
}

export default RightContent
