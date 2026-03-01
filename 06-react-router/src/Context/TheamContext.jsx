import { createContext, useState } from 'react'

export const theamDataContext = createContext()

const TheamContext = (props) => {

    const [theam, setTheam] = useState('light')

  return (
    <div>
        <theamDataContext.Provider value={[theam, setTheam]}>
            {props.children}  
        </theamDataContext.Provider>
      
    </div>
  )
}

export default TheamContext
