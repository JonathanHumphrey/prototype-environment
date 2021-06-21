// Functional imports
import React, { useState, useContext } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// Context
import { appContext } from "../Context/Context";
// Styles
import scss from "./body.module.scss";
// Component Imports
import Accordian from "./Accordian";
import PhotoGallery from './PhotoGallery';

export default function BodyComponent() {

  // State pulled from Context.jsx   
	const { bodyIndex } = useContext(appContext);

  
	return (
		<div className={scss['bodyContainer']}>
			{
			bodyIndex === 'Home' ?
				<Accordian />
			: bodyIndex === 'Gallery' ?
				<PhotoGallery />
			: bodyIndex === 'poop' ?
						<p>poop hahahahah</p>	
			:null				
			}
		</div>
	);
}

