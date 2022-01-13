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
            <>
                <header className='bg-indigo-900 text-white'>
                    <div className='flex sm:flex sm:items-center sm:justify-start sm:w-5/6 sm:ml-20 sm:h-24 bg-indigo-400'>
                        <div className='flex sm:w-1/3 sm:flex text-2xl'>
                            <div className='mt-2 ml-4 w-6 h-6 sm:hidden'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="" />
                            </div>
                            <div className='font-bold ml-3'>IPRN.pro</div>
                        </div>
                        <div className='hidden sm:flex sm:justify-start sm: w-1/3 sm:items-center'>
                            <div className='ml-5'>Dashboard</div>
                            <div className='ml-5'>SMS</div>
                            <div className='ml-5'>Voice</div>
                            <div className='ml-5'>Payments</div>
                            <div className='ml-5'>FAQ</div>
                        </div >
                        <div className='flex justify-end w-1/2 sm:ml-20 sm:w-1/3 sm:flex sm:justify-end sm:items-center'>
                            <div className=' mt-0 ml-2 mr-1 w-6 h-6 sm:hidden'>
                                <img src="https://toto-school.ru/800/600/https/mayilcoaching.com/wp-content/uploads/2017/10/quality-500950_1920.png" alt="" />
                            </div>
                            <div className='hidden sm:text-sm sm:mt-2 sm:mr-2 sm:mb-1'>My Account</div>
                            <div className='text-sm mt-2 mr-2 mb-1'>
                                <nav>
                                    <input type="checkbox" name="menu" id="btn-menu" />
                                    <label for="btn-menu">My account</label>
                                    <ul>
                                        <div className='mt-3'><li><a href="#">menu</a></li></div>
                                        <div className='mt-3'><li><a href="#">menu</a></li></div>
                                        <div className='mt-3'><li><a href="#">menu</a></li></div>
                                        <div className='mt-3'><li><a href="#">menu</a></li></div>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                </header>
                <div className='bg-indigo-900 text-white'>
                    <div className='flex sm:flex sm:justify-start sm:w-5/6 sm:ml-20 sm:h-64 bg-indigo-400'>
                        <div className='hidden sm:flex sm:justify-start sm: w-1/2 sm:text-4xl sm:h-28 sm:mt-10'>
                            My account
                        </div>
                        <div className='w-1/3 mb-4 text-xl ml-4 flex sm:hidden'>
                            My account
                        </div>
                        <div className='flex sm:w-2/3 sm:flex sm:justify-end'>
                            <div className="flex w-auto ml-8 h-8 border-solid border border-white rounded-sm text-base text-white sm:mt-12 h-5`">
                                <div className=' mt-2 ml-2 w-5 h-5 sm:hidden'>
                                    <img src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Image-Transparent-Background.png" alt="" />
                                </div>
                                <div className='text-sm ml-2 mt-2 mr-2 mb-1'>Download contract</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}