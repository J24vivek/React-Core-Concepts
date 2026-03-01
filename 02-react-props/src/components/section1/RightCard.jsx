const RightCard = (props) => {
  return (
    <div className='h-full w-65 shrink-0 rounded-4xl relative overflow-hidden border'>

        <img className='h-full w-full object-cover' src={props.img} alt="" />

        <div className='absolute top-0 left-0 w-full h-full bg-black/50 p-7 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center '>{props.index + 1}</h2>
            <div>
                <p className='text-m leading-normal text-white mb-8'>{props.text}</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-6 py-1 rounded-full text-lg'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-3 py-1 rounded-full text-lg'><i className ="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default RightCard





//  https://i.pinimg.com/736x/6c/55/07/6c5507dcf80e561055ec2ff456c2ac84.jpg

// https://i.pinimg.com/736x/c7/a9/c2/c7a9c29d45b144e4b70ab1eea74c8ae0.jpg