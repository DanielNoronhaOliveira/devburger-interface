

import  {  createContext, useContext, useEffect, useState} from "react";

import PropTypes from 'prop-types'


const UserContext = createContext({})

export const UserProvider = ({children}) => {
   const [userInfo, setUserData] = useState([])
  
   
   const putUserData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem('devburger:userData', JSON.stringify(userInfo))
   }

   const logout = () => {
    setUserData({})
    localStorage.removeItem('devburger:userData')
   }

   useEffect(() => {
    const userInfoLocalStorage= localStorage.getItem('devburger:userData')
      
        
        if (userInfoLocalStorage) {
            setUserData(JSON.parse(userInfoLocalStorage))
        }
    

   },[])

    return (
        <UserContext.Provider value={{putUserData, userInfo, logout}}>
            {children}
        </UserContext.Provider>
    )


}

export const useUser = () => {
    const context = useContext(UserContext)

    if(!context) {
        throw new Error('useUser deve ser usado com UserContex')
    }

    return context
}


UserProvider.propTypes = {
    children: PropTypes.node
}

