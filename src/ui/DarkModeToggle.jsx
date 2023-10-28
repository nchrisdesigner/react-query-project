import { useContext } from 'react';
import {HiOutlineMoon, HiOutlineSun} from 'react-icons/hi'
import styled from "styled-components";
import { useDarkMode } from '../context/DarkModeContext';

const ButtonIcon = styled.button`
    border: none;
    outline: none;
    background: none;
    color: var(--color-indigo-400);
`

const DarkModeToggle = () => {
    const {isDarkMode, setIsDarkMode} = useDarkMode()

    // function toggleDarkMode(){
    //     setIsDarkMode(prev => !prev)
    //     document.documentElement.classList.toggle('dark-mode')
    // }

    return (
        <ButtonIcon onClick={() => setIsDarkMode(prev => !prev)}>
            {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </ButtonIcon>
    )
}

export default DarkModeToggle