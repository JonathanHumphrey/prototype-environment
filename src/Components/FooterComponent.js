import React from 'react'
import '../Style Sheets/FooterStyle.css'

import { motion } from "framer-motion";
import { useState } from 'react'

import fakeLogo from '../Images/fakeLogo.png'

const topFunction = () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}


export default function FooterComponent() {
    const [isVisible, setVisible] = useState(false)
    const [id, setId] = useState(3)
    

    return (
        <div className='footer'>
            <div className='footerLeft'>
                <div className='pageInfo'>
                    <p className='information'>Info</p>
                    <p className='information'>Info</p>
                    <p className='information'>Info</p>
                    <p className='information'>Copyright &copy; 2021 </p>
                </div>
                <div className='logo'>
                    <img className='logoImg' src={fakeLogo} alt='a spot for your logo to go'></img>
                </div>
            </div>
            <div className='footerRight'>
                <div className='functionButtons'>
                    <p
                        onClick={topFunction}
                    >Back to Top</p>
                </div>
                <div className='popupNav'>
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
                </div>
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
                        
                        <div className='modalContent'>
                            <h3>{itemsList[id].title}</h3>
                            <p>{itemsList[id].content}</p>
                        </div>
                        
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
  