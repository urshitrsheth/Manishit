import React, { Component } from "react";
import { Layout, Menu, Row, Col, Avatar } from 'antd';
import { UserOutlined, SettingOutlined, DashboardOutlined } from '@ant-design/icons';
const { Header } = Layout;
const { SubMenu } = Menu;

export default class HeaderBar extends Component {
    render() {
        return (
            <Header className="header">
                <Row>
                    <Col span={20}>
                        <Menu
                            mode="horizontal"
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1" icon={<DashboardOutlined />}> DashBoard</Menu.Item>
                            <SubMenu key="sub2" icon={<UserOutlined />} title="User">
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<SettingOutlined />} title="Settings">
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={4}>
                        <Menu
                            mode="horizontal"
                            style={{ height: '100%', textAlign: 'right', borderRight: 0 }}
                        >
                            <SubMenu key="sub3" style={{ textAlign: "right" }} title=" Hi Manishit" icon={<Avatar
                                icon={<UserOutlined />}
                            />}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        );
    }
}