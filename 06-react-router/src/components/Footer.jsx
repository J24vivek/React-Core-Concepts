import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md border-t border-gray-200 dark:border-neutral-800 py-3'>
      <div className='max-w-6xl mx-auto flex items-center justify-between px-6'>
        <p className='text-sm text-gray-600 dark:text-gray-300'>© 2026 Router Demo</p>
        <div className='flex gap-4'>
          <a className='text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600' href="/about">About</a>
          <a className='text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600' href="/contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
