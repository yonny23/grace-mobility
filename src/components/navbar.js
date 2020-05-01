import React, { useState } from 'react'
import styled from "@emotion/styled"
function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="">
            <H1 onClick={() => setOpen(!open)} open={open}  >Grace Mobility</H1>
            {open && (<div>
                <ul><li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li></ul>
            </div>
            )
            }

        </nav>



    )
}


const H1 = styled.h1`   
cursor: pointer;
color: ${props => props.open ? "blue":"red"};
`
export default Navbar