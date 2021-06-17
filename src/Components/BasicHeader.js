import React from 'react'
import { motion } from "framer-motion"


import '../Style Sheets/BasicHeader.css'



export default function BasicHeader() {
    return (
        <div className='bHeader'>
            <div className='headerTitle'>
                <h1>Title</h1>
            </div>

            <div className='navBar'>
                <ul className='navList'>
                    <motion.div 
                        className='movingAnchors'
                        whileHover={{scale:1.5, transition:{duration:.5, stiffness:50, damping:.8}}} 
                    >
                        <a 
                            href='https://twitter.com/home' 
                            target='_blank' 
                            rel="noreferrer"
                            className='navbarLink'
                        >Button
                        </a>
                    </motion.div>
                    <motion.div 
                        className='movingAnchors'
                        whileHover={{scale:1.5, transition:{duration:.5, stiffness:50, damping:.8}}} 
                    >
                        <a 
                            href='https://twitter.com/home' 
                            target='_blank' 
                            rel="noreferrer"
                            className='navbarLink'
                        >Button
                        </a>
                    </motion.div>
                    <motion.div 
                        className='movingAnchors'
                        whileHover={{scale:1.5, transition:{duration:.5, stiffness:50, damping:.8}}} 
                    >
                        <a 
                            href='https://twitter.com/home' 
                            target='_blank' 
                            rel="noreferrer"
                            className='navbarLink'
                        >Button
                        </a>
                    </motion.div>
                </ul>
            </div>

            <motion.div></motion.div>

            <div className='searchBar'>
                <h4 className='searchBarTitle'>Search Bar</h4>
                <input
                    className='searchBarInput'
                    type='text'
                    placeholder='Search'
                    name='search'
                />
                <input
                    className='searchBarButton'
                    type='submit'
                    value='Go!'
                />
            </div>
        </div>
        
    )
}
