import React from 'react'
import styles from './header.module.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    
    
    <header className={styles.header}>
    
        <nav>   
        <ul>
            <li>
                <Link to='/files'>All</Link>
            </li>
            <li>
                <Link to='/breakfast'>Breakfast</Link>
            </li>
            <li>
            <Link to='/lunch'>Lunch</Link>
            </li>
            <li>
            <Link to='/milkshakes'>Milkshakes</Link>
            </li>
        </ul>
        </nav>
    </header>
  
  )
}

export default Header
