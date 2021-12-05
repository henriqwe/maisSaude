import React,{useContext} from 'react'
import './styles.css'
import { UserContext } from '../../context/UserContext'
function Header() {
    const { user } = useContext(UserContext)
    return (
        <>
            <header className='text-white d-flex justify-content-center bg-black p-2 fw-bold' > 
            TODO - {user.nome}
            </header>
        </>
    )
}

export default Header
