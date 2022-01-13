import React from 'react';
import { Route, Routes } from 'react-router';
import Main from './Main';

export default class HeaderApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: []
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <header>
                    <div className='h-20 flex flex-nowrap bg-indigo-900 items-center text-white'>
                        <div className='headerMain__logotype w-1/5 ml-20 items-center'>
                            <div className='headerMain__logotypeText '> IPRN.pro</div>
                        </div>
                        <div className='headerMain__сontainerlist w-1/2'>
                            <div className='headerMain__list ml-5'>
                                <span className='ml-20'>Dashboard</span>
                                <span className='ml-20'>SMS</span>
                                <span className='ml-20'>Voice</span>
                                <span className='ml-20'>Payments</span>
                                <span className='ml-20'>FAQ</span>
                            </div>
                        </div>
                        <div className='ml-5 '>
                            <div className='ml-20 text-white'>My Account</div>
                        </div>
                    </div>
                    <br></br>
                    <div className='h-56 bg-indigo-900 flex flex-nowrap'>
                        <div className='ml-20 items-center w-4/6 mt-20 text-white text-4xl'>
                            My account
                        </div>
                        <div className='ml-20 mt-20 h-10 '>
                            <button className="ml-4 border-solid border-2 border-white rounded-md text-white mt-5"> Download contract</button>
                        </div>
                    </div>
                </header>
            
                <footer>

                </footer>
            </div>
        )
    }
}