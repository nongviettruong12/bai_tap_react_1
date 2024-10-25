import React,{ useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const { theme } = useContext(ThemeContext)
    return ( <h1 className='text-2xl'>Current theme: {theme}</h1>)
}
export default Header