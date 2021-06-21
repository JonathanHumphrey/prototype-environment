// Functional imports
import React, { useState, useContext } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// Context
import { appContext } from "../Context/Context";
// Style
import scss from "./photoGallery.module.scss";


export default function PhotoGallery() {

    const { photos } = useContext(appContext);
	return (
		<div className={scss["galleryContainer"]}>
			
            <div className={scss['row']}>
                
                {photos.map(e =>
                    <div className={scss["item"]}>
                        <img src={e.photo} alt=''></img>
                        <p>{e.text}</p>
                    </div>
                )}
                
            </div>
			
		</div>
	);
}
