import NavMenu from '../NavMenu'
import './styles.css'

function Header() {

    return (
        <header className='text-white d-flex justify-content-between align-items-center  bg-black px-1 fw-bold' >
            <h3 className='m-0'>TODO</h3> 
            <NavMenu />
        </header>

    )
}

export default Header
