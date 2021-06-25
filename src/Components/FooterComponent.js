// Functional Imports
import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Context 
import { appContext } from "../Context/Context";
// Styles
import scss from "./footer.module.scss";
// Images
import fakeLogo from "../Images/fakeLogo.png";


// Scrolls to the top of the app, located in the functional buttons
const topFunction = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

export default function FooterComponent() {

	// Context imported from Context.jsx
	const { footerItemsList } = useContext(appContext);

	// State to handle the popupModal class
	const [isVisible, setVisible] = useState(false);
	const [id, setId] = useState(0);

	// Toggles the visibility and sets the id for the popupModal class
	const handleToggle = (event) => {
		console.log(footerItemsList[id]);
		if (isVisible) {
			setVisible(!isVisible);
		}
		if (event.target.id !== id) {
			setId(event.target.id);
		}
		setVisible(true);
	};

	return (
		<div className={scss["footer"]}>
			<div className={scss["footerLeft"]}>
				<div className={scss["pageInfo"]}>
					<p className={scss["information"]}>Info</p>
					<p className={scss["information"]}>Info</p>
					<p className={scss["information"]}>Info</p>
					<p className={scss["information"]}>Copyright &copy; 2021 </p>
				</div>
				<div className={scss["logo"]}>
					<img
						className={scss["logoImg"]}
						src={fakeLogo}
						alt="a spot for your logo to go"
					></img>
				</div>
			</div>
			<div className={scss["footerRight"]}>
				<div className={scss["functionButtons"]}>
					<p onClick={topFunction}>Back to Top</p>
				</div>
				<div className={scss["popupNav"]}>
					<ul className={scss["footerList"]}>
						<li>
							<p className={scss["footerLinks"]} onClick={handleToggle} id="0">
								Contact
							</p>
						</li>
						<li>
							<p className={scss["footerLinks"]} onClick={handleToggle} id="1">
								FAQ
							</p>
						</li>
						<li>
							<p className={scss["footerLinks"]} onClick={handleToggle} id="2">
								Other
							</p>
						</li>
					</ul>
				</div>
				<AnimatePresence>
					{isVisible ? (
						<motion.div
							className={scss["popupModal"]}
							drag
							initial={{ opacity: 0, scale: 0.75, y:-500 }}
							animate={{ opacity: 1, scale: 1, y: 0}}
							exit={{ opacity: 0, scale: 0 }}
							transition={{
								type: "spring",
								bounce: 1,
								duration: 0.25,
								stiffness: 550,
								damping: 150,
								
							}}
							dragConstraints={{
								left: -200,
								right: 0,
								top: -200,
								bottom: 0,
							}}
						>
							<motion.input
								className={scss["closeBtn"]}
								type="button"
								onClick={() => {
									setVisible(!isVisible);
									setId(3);
								}}
								value="X"
								id="buttonInput"
							/>
							<div className={scss["modalContent"]}>
								<h3>{footerItemsList[id].title}</h3>
								<p>{footerItemsList[id].content}</p>
							</div>
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
		</div>
	);
}

