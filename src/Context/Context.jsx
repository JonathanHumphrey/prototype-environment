import React, { createContext, useState, useEffect } from 'react'

export const appContext = createContext()



const Context = ({ children }) =>{
    
    const [footerItemsList, setFooterItems] = useState({
        0: {
            title: "Contact",
            id: 0,
            content: "Office: 123-456-7890",
        },
        1: {
            title: "FAQ",
            id: 1,
            content: "Q: poop? A: yes",
        },
        2: {
            title: "Poop",
            id: 2,
            content: "dick peen",
        },
        3: {
            title: "",
            id: 3,
            content: "",
        }
    })

    const [bodyItemsList, setBodyItemsList] = useState(
        [
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
    )
    useEffect(() => {
        
    }, [])
    return (
        <appContext.Provider value={{
            footerItemsList: footerItemsList,
            bodyItemsList: bodyItemsList
        }}>
            {children}
        </appContext.Provider>
    )
}
export default Context