import React, { Component } from 'react';
import styled from 'styled-components'
import { Button,Input,Alert,Message } from 'element-react';
import 'element-theme-default';

const MyDiv = styled.div`
   &.a{
	   color:red;
   }
   .b{
	   dispaly：inline-block;
	   color:red
   }

  `;

let wrap = { title: { border: '1px red solid' } }
class Home extends Component {
	render() {
		return (
			<MyDiv className="a">
				<span className="b">这是一个react的组件</span>
				<div style={wrap.title}>1234</div>
				<Button>默认的按钮</Button>
				<i className="el-icon-upload2"></i>
				<Button type="primary"  plain={true} onClick={this.open.bind(this)}>主要按钮</Button>
				<Button type="text">文字按钮</Button>
				<Input placeholder="请输入内容" />
				<Alert title="成功提示的文案" type="success" />
			</MyDiv>
		)
	}
	open() {
      Message("恭喜你，这是一条成功消息")
	}
}
export default Home
