import React, {useState} from "react";
import Nav from "../Navbar/Navbar";
import { Row, Col, Card, CardBody } from "reactstrap";
import SideNav from "../Sidebar/SideNav"
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io"
import "./Dashboard.styles.scss";


const DashboardPage = () => {

    return(
        <div className="Dashboard">
            <div className="sideBar"><SideNav /></div>
            <div className="bd">
                <div className="Dashboard_body">
                    <Nav />
                </div>
                <Row>
                    {/* fisrt colume for the number and chart*/}
                    <Col md="6" sm="12" className="col1">
                        <Row>
                            <Col md="3" sm="12" className="user_numbers">
                                <Card>
                                    <CardBody>
                                        <div className="head">
                                            <h5>Daily Commit</h5>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="3" sm="12" className="user_numbers">
                                
                            </Col>
                            <Col md="" sm="12" className="user_numbers">
                                
                            </Col>
                        </Row>
                    </Col>
                    {/* pie chart column */}
                    <Col md="5" sm="12" className="col2"></Col>
                </Row>
            </div>
        </div>
    )
}

export default DashboardPage;