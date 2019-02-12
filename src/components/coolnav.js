import React from 'react'
import { Link } from 'gatsby'
import coolnavStyles from './coolnav.module.css'


const CoolNav = () => (
    <nav className={coolnavStyles.navwrap}>
        <Link to="#" className={coolnavStyles.navlink}>Test 1</Link>
        <Link to="#" className={coolnavStyles.navlink}>Test 2</Link>
        <Link to="#" className={coolnavStyles.navlink}>Test 3</Link>
        <Link to="#" className={coolnavStyles.navlink}>Test 4</Link>
    </nav>
)

export default CoolNav