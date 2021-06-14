import React from 'react'
import '../Style Sheets/FooterStyle.css'

import { useState } from 'react'



export default function FooterComponent() {
    const [isVisible, setVisible] = useState(false)


    return (
        <div className='footer'>
            <div className='footerLeft'>
                <p>doody</p>
            </div>
            <div className='footerRight'>
                <ul className='footerList'>
                    <li>
                        <a
                            href='https://twitter.com/home' 
                            target='_blank' 
                            rel="noreferrer"
                            className='footerLinks'
                        >Home</a>
                    </li>
                    <li>
                        <p
                            className='footerLinks'
                            onClick={() => setVisible(!isVisible)}
                        >Contact</p>
                    </li>
                    <li>
                        <a
                            href='https://twitter.com/home' 
                            target='_blank' 
                            rel="noreferrer"
                            className='footerLinks'
                        >F.A.Q</a>
                    </li>
                </ul>
                {isVisible ? 
                    <div className='popupModal'>
                        <input
                            className='closeBtn'
                            type='button'
                            onClick={() => setVisible(!isVisible)}
                            value='X'
                        />
                        <p>content here</p>
                    </div>
                : null}
            </div>
        </div>
    )
}
