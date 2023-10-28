import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext()

function DarkModeProvider({children}){
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(function(){
        if(isDarkMode){
            document.documentElement.classList.add('dark-mode')
            document.documentElement.classList.remove('light-mode')
            console.log(document.documentElement);
        }
        else{
            document.documentElement.classList.remove('dark-mode')
            document.documentElement.classList.add('light-mode')
            console.log(document.documentElement);
        }
    }, [isDarkMode])

    return (
        <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

function useDarkMode(){
    const context = useContext(DarkModeContext)

    if(context === undefined) throw new Error('Dark mode context was used outside of DarkModeProvider')

    return context
}

export {DarkModeProvider, useDarkMode}