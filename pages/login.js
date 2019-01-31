import React from 'react'
import Layout from "../components/layout";

import {MyEnhancedForm} from "../components/enhancedForm";

export default class Login extends React.Component {

  render() {
    return (
      <Layout background="">
        <div className="container">
          <div className="coverImage"/>
          <div className="loginForm">

          </div>
          <div>
            Form
            <MyEnhancedForm/>
          </div>
        </div>
      </Layout>
    )
  }
}