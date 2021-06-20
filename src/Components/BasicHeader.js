// Functional Imports
import React from 'react'
import { motion } from "framer-motion"

//Styles
import scss from "./header.module.scss";



export default function BasicHeader() {
    return (
        <div className={scss["bHeader"]}>
            <div className={scss["headerTitle"]}>
                <h1>Title</h1>
            </div>

            <div className={scss["navBar"]}>
                <ul className={scss["navList"]}>
                    <motion.div 
                        className={scss["movingAnchors"]}
                        whileHover={{scale:1.5, transition:{duration:.5, stiffness:50, damping:.8}}} 
                    >
                        <a 
                            href='https://twitter.com/home' 
                            target='_blank' 
                            rel="noreferrer"
                            className={scss["navBarLink"]}
                        >Button
                        </a>
                    </motion.div>
                    <motion.div 
                        className={scss["movingAnchors"]}
                        whileHover={{scale:1.5, transition:{duration:.5, stiffness:50, damping:.8}}} 
                    >
                        <a 
                            href='https://twitter.com/home' 
                            target='_blank' 
                            rel="noreferrer"
                            className={scss["navBarLink"]}
                        >Button
                        </a>
                    </motion.div>
                    <motion.div 
                        className={scss["movingAnchors"]}
                        whileHover={{scale:1.5, transition:{duration:.5, stiffness:50, damping:.8}}} 
                    >
                        <a 
                            href='https://twitter.com/home' 
                            target='_blank' 
                            rel="noreferrer"
                            className={scss["navBarLink"]}
                        >Button
                        </a>
                    </motion.div>
                </ul>
            </div>

            <motion.div></motion.div>

            <div className={scss["searchBar"]}>
                <h4 className={scss["searchBarTitle"]}>Search Bar</h4>
                <input
                    className={scss["textField"]}
                    type='text'
                    placeholder='Search'
                    name='search'
                />
                <input
                    className={scss["searchBarButton"]}
                    type='submit'
                    value='Go!'
                />
            </div>
        </div>
        
    )
}
