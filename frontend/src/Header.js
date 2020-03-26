import React from 'react'

export default function Header({children}){   //export default function Header(props){
    return(
        <header>
            <h1>{children}</h1>              
        </header>
    )
}
 //props.title e props.children
//export default Header