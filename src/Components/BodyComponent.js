import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../Style Sheets/BodyStyle.css";


export default function BodyComponent() {
  return (
    <div className='container'>
        <AnimateSharedLayout>
          <motion.ul className='popout' layout initial={{ borderRadius: 25 }}>
            {itemsList.map(item => (
              
              <Item key={item.index} title={item.title} content={item.content}/>
              
            ))}
          </motion.ul>
      </AnimateSharedLayout>
    </div>
    
  );
}

function Item({title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li className='popoutOption' layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout>
        <p className='hamburger'>&#9776;</p>
        <h2>{title}</h2>
      </motion.div>
      <AnimatePresence>{isOpen && <Content title={title} content={content}/>}</AnimatePresence>
    </motion.li>
  );
}

function Content({title, content}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row">
        <p className='content'>{content}</p>
      </div>
      
    </motion.div>
  );
}


const itemsList = [
  {
    title: 'First Panel with a really long title ',
    index: 0,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae odio ullamcorper, aliquam diam sed, iaculis magna. Nunc tristique, quam ac vulputate posuere, dolor enim finibus nulla, vitae convallis orci leo nec lectus. Phasellus congue mi in viverra ullamcorper. Proin quis sapien mattis, varius orci eget, porttitor nulla. Fusce egestas justo odio, vitae venenatis nulla pretium a. Praesent sollicitudin euismod convallis. Maecenas sit amet hendrerit odio. Maecenas euismod mi at rhoncus euismod. Aliquam at ultricies tellus. Nulla facilisi. Etiam auctor, sem eget vulputate fringilla, augue orci gravida purus, tincidunt luctus magna diam eu enim. Nullam eget tincidunt lacus. Nam vel faucibus leo, ut vulputate mi. Curabitur vel ante fermentum, lacinia magna sed, egestas tellus.

    Nulla ut turpis ante. Etiam dictum efficitur iaculis. Vestibulum ex libero, molestie eu urna id, aliquam rhoncus nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie ligula id nunc consequat porta. Vivamus ac pharetra lacus, in posuere nisi. Nullam sodales in risus at aliquet..`
  },
  {
    title: 'Second Panel',
    index: 1,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae odio ullamcorper, aliquam diam sed, iaculis magna. Nunc tristique, quam ac vulputate posuere, dolor enim finibus nulla, vitae convallis orci leo nec lectus. Phasellus congue mi in viverra ullamcorper. Proin quis sapien mattis, varius orci eget, porttitor nulla. Fusce egestas justo odio, vitae venenatis nulla pretium a. Praesent sollicitudin euismod convallis. Maecenas sit amet hendrerit odio. Maecenas euismod mi at rhoncus euismod. Aliquam at ultricies tellus. Nulla facilisi. Etiam auctor, sem eget vulputate fringilla, augue orci gravida purus, tincidunt luctus magna diam eu enim. Nullam eget tincidunt lacus. Nam vel faucibus leo, ut vulputate mi. Curabitur vel ante fermentum, lacinia magna sed, egestas tellus.

    Nulla ut turpis ante. Etiam dictum efficitur iaculis. Vestibulum ex libero, molestie eu urna id, aliquam rhoncus nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie ligula id nunc consequat porta. Vivamus ac pharetra lacus, in posuere nisi. Nullam sodales in risus at aliquet.`
  },
  {
    title: 'Third Panel',
    index: 2,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae odio ullamcorper, aliquam diam sed, iaculis magna. Nunc tristique, quam ac vulputate posuere, dolor enim finibus nulla, vitae convallis orci leo nec lectus. Phasellus congue mi in viverra ullamcorper. Proin quis sapien mattis, varius orci eget, porttitor nulla. Fusce egestas justo odio, vitae venenatis nulla pretium a. Praesent sollicitudin euismod convallis. Maecenas sit amet hendrerit odio. Maecenas euismod mi at rhoncus euismod. Aliquam at ultricies tellus. Nulla facilisi. Etiam auctor, sem eget vulputate fringilla, augue orci gravida purus, tincidunt luctus magna diam eu enim. Nullam eget tincidunt lacus. Nam vel faucibus leo, ut vulputate mi. Curabitur vel ante fermentum, lacinia magna sed, egestas tellus.

    Nulla ut turpis ante. Etiam dictum efficitur iaculis. Vestibulum ex libero, molestie eu urna id, aliquam rhoncus nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie ligula id nunc consequat porta. Vivamus ac pharetra lacus, in posuere nisi. Nullam sodales in risus at aliquet.`
  }
]
