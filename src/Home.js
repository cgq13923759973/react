/*
 * @Author: your name
 * @Date: 2019-09-11 00:03:45
 * @LastEditTime: 2019-11-24 23:08:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \React-project\react-project\src\Home.js
 */
import React, { Component } from "react";
import styled from "styled-components";
// import { Button, Input, Alert, Message } from "element-react";
// import "element-theme-default";

const MyDiv = styled.div`
   &.a{
	   color:red;
   }
   .b{
	   dispaly：inline-block;
	   color:red
   }
  `;

// let wrap = { title: { border: "1px red solid" } };
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MyDiv className="a">
        {this.props.text}
        {/* <span className="b">这是一个react的组件</span>
        <div style={wrap.title}>1234</div>
        <Button>默认的按钮</Button>
        <i className="el-icon-upload2" />
        <Button type="primary" plain={true} onClick={this.open.bind(this)}>
          主要按钮
        </Button>
        <Button type="text">文字按钮</Button>
        <Input placeholder="请输入内容" />
        <Alert title="成功提示的文案" type="success" /> */}
      </MyDiv>
    );
  }
}
export default Home;
