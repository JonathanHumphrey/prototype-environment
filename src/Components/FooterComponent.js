import React from 'react'
import '../Style Sheets/FooterStyle.css'

export default function FooterComponent() {
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
                        <a
                            href='https://twitter.com/home' 
                            target='_blank' 
                            rel="noreferrer"
                            className='footerLinks'
                        >Contact</a>
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
            </div>
        </div>
    )
}
