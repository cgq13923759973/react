import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import LeiBieComponent from './views/LeiBieCompoent'
const MyMenu = styled.div`
  .menu {
    width: 200px;
    float: left;
  }
  .container {
    float: right;
  }
  ul {
    list-style: none;
  }
  .a {
    border: 1px red solid;
  }
`
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Router>
        <MyMenu className={'menu'}>
          <ul>
            <li>
              <Link to="/liebiecompoent">组件的类别</Link>
            </li>
          </ul>
        </MyMenu>
        <div className={'container'}>
          <Route path="/liebiecompoent" Component={LeiBieComponent}>
            <LeiBieComponent />
          </Route>
        </div>
      </Router>
    )
  }
}
export default Home
