import React, { Component } from "react";
import { Layout, Card } from 'antd';
import BreadCrumb from './Breadcrumb'
const { Content } = Layout;

export default class MainContent extends Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <BreadCrumb />
                <Content>
                    <Card title="Card title">
                        Card content
                    </Card>
                </Content>
            </Layout>

        );
    }
}