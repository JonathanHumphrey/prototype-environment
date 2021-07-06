// Functional Imports
import React, { useState, useContext } from "react";
import { motion } from "framer-motion"
// Context
import { appContext } from "../Context/Context";
//Styles
import scss from "./header.module.scss";





export default function BasicHeader() {
    const { bodyIndex, setBodyIndex } = useContext(appContext);
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
                        <button
                            onClick={(e) => { setBodyIndex(e.target.id); console.log(e.target.id)}}
                            className={scss["navBarLink"]}
                            id='Home'
                            type='button'
                        >Home
                        </button>
                    </motion.div>
                    <motion.div 
                        className={scss["movingAnchors"]}
                        whileHover={{scale:1.5, transition:{duration:.5, stiffness:50, damping:.8}}} 
                    >
                        <button
                            onClick={(e) => { setBodyIndex(e.target.id); console.log(e.target.id)}}
                            className={scss["navBarLink"]}
                            id='Gallery'
                            type='button'
                        >Gallery
                        </button>
                    </motion.div>
                    <motion.div 
                        className={scss["movingAnchors"]}
                        whileHover={{scale:1.5, transition:{duration:.5, stiffness:50, damping:.8}}} 
                    >
                        <button
                            onClick={(e) => { setBodyIndex(e.target.id); console.log(bodyIndex)}}
                            className={scss["navBarLink"]}
                            id='Register'
                            type='button'
                        >Register
                        </button>
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
