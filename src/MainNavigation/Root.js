import React from "react";
import WelCome from "./WelCome";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Root = (props) => {
    return (<>
        <WelCome />
        <main>
            {props.children}
        </main>
    </>
    )
}
export default Root;
