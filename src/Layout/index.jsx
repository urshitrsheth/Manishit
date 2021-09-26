import React, { Component } from "react";
import { Layout, Breadcrumb } from 'antd';
import "../Config/Css/App.css"
import "../Config/Css/Manishit.css"
import FooterBar from './Footer/index'
import HeaderBar from './Header/index'
import MainContent from './Content/index'
import SideBar from './SideBar/index'
const { Content } = Layout;

export default class ThemeLayout extends Component {
    render() {
        return (
            <Layout>
                <SideBar />
                <Layout>
                    <HeaderBar />
                    <MainContent />
                    <FooterBar />
                </Layout>
            </Layout>
        );
    }
}