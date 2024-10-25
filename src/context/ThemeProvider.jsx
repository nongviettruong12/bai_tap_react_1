import React,{ useState, useEffect } from 'react'
import ThemeContext from './ThemeContext'
const LEFT_MENU_MOCK = {
    data: [
        {
            category: "TO_DAY",
            title: "New chat",
            redriectLink: "",
            price: 12
        },
    ]
}
const ThemeProvider = ({children, leftMenu}) =>{
    const [theme, setTheme] = useState('light')
    const [menu, setMenu] = useState<any>({})
    
    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    } 
    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    },[theme])

    useEffect(() => {
        const internalLeftMenu = {...leftMenu}
        
        // internalLeftMenu.forEach

        setMenu(internalLeftMenu)
    }, [])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider