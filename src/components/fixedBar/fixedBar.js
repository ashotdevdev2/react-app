import React, {Component} from "react";
import './fixedBar.css'
import 'antd/dist/antd.css'
import {Menu} from "antd";
import {CompassOutlined, CalculatorOutlined, PlusCircleOutlined, BellOutlined, UserOutlined} from "@ant-design/icons";

class FixedBar extends Component{

    state = {
        currentKey: '1'
    }

    handleClick = e => {
        this.setState({
            currentKey: e.key
        });
    };

    render() {

        const { currentKey } = this.state

        return (
            <div className='fixedBar'>
                <Menu onClick={this.handleClick} mode='horizontal' defaultSelectedKeys={[currentKey]}>
                    <Menu.Item icon={<CompassOutlined />} style={{border: 'none'}} key="1"/>
                    <Menu.Item icon={<CalculatorOutlined />} style={{border: 'none'}} key="2"/>
                    <Menu.Item icon={<PlusCircleOutlined />} style={{border: 'none'}} key="3"/>
                    <Menu.Item icon={<BellOutlined />} style={{border: 'none'}} key="4"/>
                    <Menu.Item icon={<UserOutlined />} style={{border: 'none'}} key="5"/>
                </Menu>
            </div>
        )
    }
}

export default FixedBar