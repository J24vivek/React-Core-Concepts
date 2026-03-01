import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Section1 from './components/section1/Section1.jsx'
import Section2 from './components/section2/section2.jsx'

function App() {
  
  const users = [
    {
      id: 1,
      image: 'https://i.pinimg.com/1200x/fa/46/dd/fa46ddafa1c73217fcba1b2a554509f4.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut pariatur animi ipsum possimus ad?',
      tag: 'Satisfied',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/6e/3c/40/6e3c4001f1bbbe91ad660b77bf8e0585.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut pariatur animi ipsum possimus ad?',
      tag: 'UnderServed',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/6c/55/07/6c5507dcf80e561055ec2ff456c2ac84.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut pariatur animi ipsum possimus ad?',
      tag: 'UnderBanked',
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/6c/55/07/6c5507dcf80e561055ec2ff456c2ac84.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut pariatur animi ipsum possimus ad?',
      tag: 'UnderBanked',
    },
  ]

  return (

    <div>
      <Section1 users={users} />
      <Section2 />
      

    </div>

  )
}

export default App
