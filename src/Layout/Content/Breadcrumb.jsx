import React, { Component } from "react";
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

export default class BreadCrumb extends Component {
    render() {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}