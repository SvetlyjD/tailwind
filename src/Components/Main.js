import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: []
        }
    }

    render() {
        return (
            <div className='w-1/6 ml-3'>
                <div className='mt-3'><a href="/">Account Details</a></div>
                <div className='mt-3'><a href="/securitySetting">Security settings</a></div>
                <div className='mt-3'><a href="/payountSetting">Payount settings</a></div>
                <div className='mt-3'><a href="/">Technical setting</a></div>
                <div className='mt-3'><a href="/">Notification setting</a></div>
            </div>
        )
    }
}