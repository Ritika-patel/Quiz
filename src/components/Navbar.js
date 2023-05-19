import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='icons'>
                <FontAwesomeIcon icon={faArrowLeft} />
                <FontAwesomeIcon icon={faSearch} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
