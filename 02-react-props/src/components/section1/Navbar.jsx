import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="flex items-center justify-between px-18 pt-7 pb-1">
            <h4 className="bg-black text-white px-6 py-2 uppercase rounded-full">Target Audience</h4>
            <button className="bg-gray-400  px-6 py-2 uppercase rounded-full tracking-widest text-sm">Digital Banking Platform</button>
        </nav>    
    </div>
  )
}

export default Navbar
