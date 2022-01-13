import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import AccountSetting from './Pages/AccountDetails';
import Error from './Pages/Error';
import PayountSetting from './Pages/PayountSetting';
import SecuritySetting from './Pages/SecuritySetting';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: []
    }
  }

  render() {
         return (
        <div>
          <Routes>
            <Route exact path="/" element={<AccountSetting />} />
            <Route exact path="/securitySetting" element={<SecuritySetting />} />
            <Route exact path="/payountSetting" element={<PayountSetting />} />
            <Route path="*" element={< Error />} />
          </Routes>
        </div>
      )
  }
}