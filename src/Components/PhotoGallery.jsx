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
	const [id, setId] = useState(99)
	const toggleOpen = () => setIsOpen(!isOpen);

	const variants = {
		hightlighted: { scale: 1.5, opacity: 1 },
		default: { scale: 1, opacity: 0 }
	}
	return (
		<div className={scss["galleryContainer"]}>
			<div className={scss["images"]}>
				{photos.map((e) => (

					<motion.div
						className={scss["item"]}
						whileHover={{ scale: 1.1 }}
						onClick={() => {
							toggleOpen()
							setId(e.key)
						}}
					>
						<img src={e.photo} alt=''></img>
						<p>{e.text}</p>
					</motion.div>
				))}
				{isOpen ? (
					photos.map(() =>
						<div>
							<img src></img>
						</div>
					)
				)
					: null}
			</div>
		</div >
	);
}

/* <div className={scss['row']}>
			<div className={scss["item"]}>
				<img src={photo} alt=''></img>
				<p>{text}</p>
			</div>
		</div> */
