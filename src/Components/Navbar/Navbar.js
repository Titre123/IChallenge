import React, {useState} from "react";
import { Navbar, NavbarBrand, Form, FormGroup, InputGroup, Input, Media } from "reactstrap";
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io"
import "./Navbar.styles.scss";

const Nav = () => {
        
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const day = new Date().getDay();
    const monthString = new Date().getMonth();
    const year = new Date().getFullYear()
    
    return(
        <div className="dash_nav">
            <Navbar light>
                <div className="d-flex align-items-center" style={{marginLeft: "30px"}}>
                    <NavbarBrand href="/" className="brandName">Dashboard </NavbarBrand><h5 style={{color: "#C1C5C8", marginTop: "15px", marginLeft: "-6px"}}>{month[monthString]} {day}, {year}</h5>
                </div>
                <Form className="navForm">
                    <FormGroup>
                        <InputGroup className="search_bar">
                            <BiSearch />
                            <Input type="text" placeholder="Search..."></Input>
                        </InputGroup>
                    </FormGroup>
                </Form>
                <div className="alerm">
                    <IoMdNotifications style={{width: "40px", height: "40px"}}/>
                </div>
                <Media className="dash_media">
                    <Media left middle className="img_media">
                        <Media src="./assets/pics.jpg" className="passport" alt="User image"></Media>
                    </Media>
                    <Media body>
                        <h4>User name</h4>
                    </Media>
                </Media>
            </Navbar>
        </div>
    )
}

export default Nav;