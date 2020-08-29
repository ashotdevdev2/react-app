import React, {Component} from "react";
import './main.css'
import {Carousel, Menu, Dropdown, Button} from "antd";
import 'antd/dist/antd.css';
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {signOut} from "../../store/actions/auth";


class Main extends Component{

    logout = (e) => {
        e.preventDefault()
        this.props.logout()
    }

    render() {

        const {user} = this.props

        if (!user.uid) {
            return <Redirect to='/'/>
        }

        const menu = (
            <Menu>
                <Menu.Item>
                    <a onClick={this.logout} rel="noopener noreferrer" href="#">
                        Logout
                    </a>
                </Menu.Item>
            </Menu>
        )

        const contentStyle = {
            height: '304px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#FFF',
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "19px",
        };

        return (
            <div className="main">
                <div className="header-container">
                    <div className="logo">
                        <img src="images/white_logo.png" alt="white_logo"/>
                    </div>
                    <div className="userInfo">
                        <Dropdown overlay={menu}>
                            <div>{user.email}</div>
                        </Dropdown>
                    </div>
                </div>
                <div className="main-container">
                    <div className="info">
                        <div className="infoText">
                            <img src="images/logo.png" alt="logo"/>
                            <div>
                                <h3>Healthy Eating</h3>
                                <p>Eating a healthy diet is not about strict limitations, Rather its about feeling great</p>
                            </div>
                        </div>
                        <div className="infoBtn">
                            <Button>
                                Read more
                            </Button>
                        </div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel carousel1">
                            <div className="carousel-text">
                                <h3>Lorem Ipsum</h3>
                            </div>
                            <div className="carousel-images">
                                <Carousel>
                                    <div>
                                        <img style={contentStyle} src="images/slide1.jpg" alt="slide1"/>
                                    </div>
                                    <div>
                                        <img style={contentStyle} src="images/slide2.jpg" alt="slide2"/>
                                    </div>
                                    <div>
                                        <img style={contentStyle} src="images/slide3.jpg" alt="slide3"/>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        <div className="carousel carousel2">
                            <div className="carousel-text">
                                <h3>Lorem Ipsum</h3>
                            </div>
                            <div className="carousel-images">
                                <Carousel>
                                    <div>
                                        <img style={{...contentStyle, width: "100%"}} src="images/slide4.jpg" alt="slide4"/>
                                    </div>
                                    <div>
                                        <img style={{...contentStyle, width: "100%"}} src="images/slide5.jpg" alt="slide5"/>
                                    </div>
                                    <div>
                                        <img style={{...contentStyle, width: "100%"}} src="images/slide6.jpg" alt="slide6"/>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoText">
                            <img src="images/logo.png" alt="logo"/>
                            <div>
                                <h3>Healthy Food</h3>
                                <p>Food is the most important thing in our lives besides water. Moreover, healthy eating means ...</p>
                            </div>
                        </div>
                        <div className="infoBtn">
                            <Button>
                                Read more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.firebase.auth,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)