import React from 'react'
import '../Style Sheets/FooterStyle.css'

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from 'react'


export default function FooterComponent() {
    const [isVisible, setVisible] = useState(false)
    const [id, setId] = useState(3)
    

    return (
        <div className='footer'>
            <div className='footerLeft'>
                <p>doody</p>
            </div>
            <div className='footerRight'>
                <ul className='footerList'>
                    <li>
                        <p
                            className='footerLinks'
                            onClick={(event) => { setVisible(!isVisible);  setId(event.target.id)}}
                            id='0'
                        >Contact</p>
                    </li>
                    <li>
                        <p
                            className='footerLinks'
                            onClick={(event) => { setVisible(!isVisible);  setId(event.target.id)}}
                            id='1'
                        >FAQ</p>
                    </li>
                    <li>
                        <p
                            className='footerLinks'
                            onClick={(event) => { setVisible(!isVisible);  setId(event.target.id)}}
                            id='2'
                        >Other</p>
                    </li>
                </ul>
                {isVisible ? 
                    <motion.div className='popupModal'
                        drag
                        dragConstraints={{
                            left: -200,
                            right: 0,
                            top: -200,
                            bottom: 0
                        }}
                    >
                        <input
                            className='closeBtn'
                            type='button'
                            onClick={() => { setVisible(!isVisible); console.log('poop')}}
                            value='X'
                            id='buttonInput'
                        />
                        
                        <h3>{itemsList[id].title}</h3>
                        <p>{itemsList[id].content}</p>
                        
                    </motion.div>
                : null}
            </div>
        </div>
    )
}
const itemsList = [
    
    {
        title: 'Contact',
        id: 0,
        content: 'Office: 123-456-7890'
    },
    {
        title: 'FAQ',
        id: 1,
        content:'Q: poop? A: yes'
    },
    {
        title: 'Poop',
        id: 2,
        content: 'dick peen'
    }
    
  ]
  