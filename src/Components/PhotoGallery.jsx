// Functional imports
import React, { useState, useContext } from "react";
import { motion, AnimateSharedLayout, AnimatePresence, transform } from "framer-motion";
// Context
import { appContext } from "../Context/Context";
// Style
import scss from "./photoGallery.module.scss";

export default function PhotoGallery() {
	// Context for the object holding the photos
	const { photos } = useContext(appContext);

	// Setting up state for the animations of the photos
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState(0)

	 const toggleOpen = () => {
		setIsOpen(!isOpen)
	}; 
	 /* const toggleOpen = () => {
		console.log(isOpen)
		if (isOpen) {
			setIsOpen(false);
			console.log(isOpen)
		}
		if (event.target.id !== id) {
			setId(event.target.id);
		} 
		setIsOpen(true); 
	};  */

	const variants = {
		hightlighted: { scale: 1.5, opacity: 1 },
		default: { scale: 1, opacity: 0 }
	}
	return (
		<div className={scss["galleryContainer"]}>
			<div className={scss["images"]}>
				{photos.map((e, i) => (

					<motion.div
						className={scss["item"]}
						whileHover={{ scale: 1.1 }}
						onClick={(e) => {
							toggleOpen()
							setId(photos[i].key)
							console.log(photos[i].key)
						}}
					>
						<img src={e.photo} alt='' id={e.id}></img>
						<p>{e.text}</p>
					</motion.div>
				))}
			</div>
			{isOpen ? (
					
				<motion.div
					className={scss['popupPicture']}
					initial={{ opacity: 1, scale: 0.75, y:-250 }}
					animate={{ opacity: 1, scale: 1, y: 0}}
					exit={{ opacity: 0, scale: 0, y: 1000 }}
					transition={{
						type: "spring",
						bounce: 1,
						stiffness: 1000,
						damping: 300,
						
					}}
				>
							<input
								className={scss["closeBtn"]}
								type="button"
								onClick={() => {
									toggleOpen()
								}}
								value="X"
								id="buttonInput"
							/>
							<img src={photos[id].photo} alt={photos[id].text}></img>
						</motion.div>
					
				)
					: null}
		</div >
	);
}

/* <div className={scss['row']}>
			<div className={scss["item"]}>
				<img src={photo} alt=''></img>
				<p>{text}</p>
			</div>
		</div> */
