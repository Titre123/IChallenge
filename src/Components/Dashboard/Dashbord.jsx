import React, {useEffect, useState} from "react";
import Nav from "../Navbar/Navbar";
import { Row, Col, Card, CardBody, Container } from "reactstrap";
import { PieData } from "./pie";
import SideNav from "../Sidebar/SideNav";
import { AiFillQuestionCircle } from "react-icons/ai";
import DChart from "./pieChart";
import  { BarData, BarData1, BarData2 } from "./Bar";
import BarChart from "./BarChart";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { TfiSharethisAlt } from "react-icons/tfi"
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Dashboard.styles.scss";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const DashboardPage = () => {
    const [user, loading, error] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState()
    const [githubUserInfo, setGithubUserInfo] = useState()
    const [Repository, setRepository] = useState()
    const [commit, setCommit] = useState(0)
    
    // Setting Up Pie Chart
    const [ pieData, setPieData ] = useState({
        labels: PieData.map((data) => data.label),
        datasets: [{
            label: "statistics",
            data: PieData.map((data) => data.data),
            backgroundColor: ["#FFC152", "#8BBFFD"],
            borderWidth: 10,
            borderColor: "#F0F0F0",
            hoverOffset: 0,
            radius: '70%',
            cutout: '75%'
        }]
    });

    // Data to set ip our bar chart
    const [ barData, setBarData ] = useState({
        labels: BarData.map((data) => data.date),
        datasets: [{
            label: "likes",
            data: BarData.map((data) => data.data),
            backgroundColor: BarData.map(data => data.bg),
            barThickness: 12,
            borderRadius: 10
        },
        {
            label: "comments",
            data: BarData1.map((data) => data.data),
            backgroundColor: BarData1.map(data => data.bg),
            barThickness: 12,
            borderRadius: 10
        },
        {
            label: "shares",
            data: BarData2.map((data) => data.data),
            backgroundColor: BarData2.map(data => data.bg),
            barThickness: 12,
            borderRadius: 10
        },]
    });
    console.log()
    // UseEffect to load set data from our fireabase user api endpoint
    useEffect(() => {
        const path = `https://ichallenge-bcc55-default-rtdb.firebaseio.com/users/${user.uid}.json`
        fetch(path).then(res => res.json()).then(data => setUserInfo(data))
    }, user)

    useEffect(() => {
        const path = `https://api.github.com/user/${user.providerData[0].uid}`
        fetch(path).then(res => res.json()).then(data => setGithubUserInfo(data))
    }, user)

    useEffect(() => {
        const path = githubUserInfo ? githubUserInfo.repos_url : ''
        fetch(path).then(res => res.json()).then(data => setRepository(data))
    }, githubUserInfo)

    useEffect(() => {
        if (Repository) {
            Repository.map(item => {
                async () => {
                    const res = await fetch(item.commits_url)
                    setCommit(prev => prev + res.length)
                }
            })
        }
    }, Repository)

    console.log(Repository)

    return( 
        <div className="Dashboard">
            <div className="sideBar"><SideNav username= { githubUserInfo ? githubUserInfo.login : ''} twitter={githubUserInfo ? githubUserInfo.twitter_username : ''}/></div>
            <Container className="bd">
                <div className="Dashboard_body">
                    <Nav image={userInfo ? userInfo.profileImg : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKpQUy8JP90MAZxFjU0P9bPqkUWL35fd8Ag&usqp=CAU'} />
                </div>
                <Row>
                    {/* fisrt colume for the number and chart*/}
                    <Col lg="8" md="12" sm="12" className="col1">
                        <Row>
                            <Col lg="4" md="12" sm="12" className="user_numbers">
                                <Card className="card-card">
                                    <CardBody className="body_B">
                                        <div className="head">
                                            <h5 className="head_text">Daily Commit</h5>
                                            <AiFillQuestionCircle style={{color: "#CCCCCC", width: "20px", height: "20px"}}/>
                                        </div>
                                        <p className="stat">200k</p>  
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4" md="12" sm="12" className="user_numbers">
                                <Card className="card-card">
                                    <CardBody className="body_B">
                                        <div className="head">
                                            <h5  className="head_text">Followers</h5>
                                            <AiFillQuestionCircle style={{color: "#CCCCCC", width: "20px", height: "20px"}}/>
                                        </div>
                                        <p className="stat">{githubUserInfo ? githubUserInfo.followers : ''}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4" md="12" sm="12" className="user_numbers">
                                <Card className="card-card">
                                    <CardBody className="body_B">
                                        <div className="head">
                                            <h5  className="head_text">Repository</h5>
                                            <AiFillQuestionCircle style={{color: "#CCCCCC", width: "20px", height: "20px"}}/>
                                        </div>
                                        <p className="stat">{githubUserInfo ? githubUserInfo.public_repos: ''}</p>
                                    </CardBody>
                                </Card>                             
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <Card className="main_stat_card">
                                    <CardBody>
                                        <p className="main_stat_heading">GitHub Statistics</p>
                                        <div className="subheading">
                                            <div className="avg_like">
                                                <div className="avg_like_icon"><BsFillSuitHeartFill className="like_icon"/></div>
                                                <div className="num">7.006 <span>+ 10,3 %</span>
                                                    <p className="avg_text">Avg likes this week</p>
                                                </div>
                                            </div>
                                            <div className="avg_like">
                                                <div className="avg_comment_icon"><RiMessage2Fill className="comment_icon"/></div>
                                                <div className="comment_num">7.006 <span>+ 10,3 %</span>
                                                    <p className="avg_comment">Avg comments this week</p>
                                                </div>
                                            </div>
                                            <div className="avg_like">
                                                <div className="avg_share_icon"><TfiSharethisAlt className="share_icon"/></div>
                                                <div className="share_num">7.006 <span>+ 10,3 %</span>
                                                    <p className="avg_share">Avg share this week</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div  style={{ marginTop: "30px", width:"auto", height:"400px"}}>
                                            <BarChart data={barData} />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    {/* pie chart column */}
                    <Col lg="4" md="12" sm="12" className="col2">
                        <Row>
                            <Col sm="12" md="12" lg="12">
                                <Card className="card-card1">
                                    <CardBody className="body1">
                                        <div>
                                            <p className="stat_text">GitHub Statistics</p>
                                            <DChart data={pieData}/>
                                            <div className="chart_stat">
                                                <p className="chart_text">2,9 M </p>
                                                <div className="d-flex align-items-center chart_text1"><BiTrendingUp  className="icon_bg1" style={{width: "20px", height:"20px"}}/><span className="stat_stat">+ 300K</span></div>
                                            </div>
                                            <div className="male_stat">
                                                <p style={{textAlign: "center", display: "flex", justifyContent: "center", flexDirection: 'column', margin: '0px'}}>
                                                    40% <span style={{fontSize: '1rem'}}>Male</span>
                                                </p>
                                            </div>
                                            <div className="stat_type">
                                                    <div className="male">
                                                        <div className="male_color"></div>
                                                        <div className="male_text">Male</div>
                                                    </div>
                                                    <div className="male">
                                                        <div className="female_color"></div>
                                                        <p className="male_text">Female</p>
                                                    </div>
                                            </div>
                                            <p className="btm_text" style={{color: "#CCCCCC"}}>Last 30 days <MdKeyboardArrowDown /> </p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardPage;
