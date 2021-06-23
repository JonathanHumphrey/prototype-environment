// Functional imports
import React, { useState, useContext } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// Context
import { appContext } from "../Context/Context";
// Styles
import scss from "./accordian.module.scss";

export default function Accordian() {
	const { bodyItemsList } = useContext(appContext);

	// This is a little confusing but the heirarchy is defined in the .scss file.
	return (
		<div className={scss["container"]}>
			<AnimateSharedLayout>
				<motion.ul
					className={scss["popout"]}
					layout
					initial={{ borderRadius: 25 }}
				>
					{bodyItemsList.map((item) => (
						<Item key={item.index} title={item.title} content={item.content} />
					))}
				</motion.ul>
			</AnimateSharedLayout>
		</div>
	);
}

function Item({ title, content }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<motion.li
			className={scss["popoutOption"]}
			layout
			onClick={toggleOpen}
			initial={{ borderRadius: 10 }}
		>
			<motion.div className={scss["avatar"]} layout>
				<p className={scss["hamburger"]}>&#9776;</p>
				<h2>{title}</h2>
			</motion.div>
			<AnimatePresence>
				{isOpen && <Content title={title} content={content} />}
			</AnimatePresence>
		</motion.li>
	);
}

function Content({ title, content }) {
	return (
		<motion.div
			className={scss["contentHolder"]}
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className={scss["row"]}>
				<p className={scss["content"]}>{content}</p>
			</div>
		</motion.div>
	);
}
