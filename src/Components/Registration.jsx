// Functional Imports
import React, { useState, useContext } from "react";
import { motion } from "framer-motion"
// Context
import { appContext } from "../Context/Context";
//Styles
import scss from "./registration.module.scss";

export default function Registration() {
    return (
        <div className={scss['container']}>
            <div className={scss['form']}>
                <br/>
                <form>
                    <p>First Name: </p>
                    <input
                        className={scss['formField']}
                        type='text'
                        name='firstname'
                        placeholder='First Name'
                    />
                    <p>Last Name: </p>
                    <input
                        className={scss['formField']}
                        type='text'
                        name='lastname'
                        placeholder='Last Name'
                    />
                    <p>Email: </p>
                    <input
                        className={scss['formField']}
                        type='text'
                        name='email'
                        placeholder='Email'
                    />
                    <p>Password: </p>
                    <input
                        className={scss['formField']}
                        type='password'
                        name='password'
                    />
                    <input
                        type='submit'
                    />
                </form>
            </div>
        </div>
    )
}
