import React from 'react';
import { Route, Routes } from 'react-router';

export default class AccountSetting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: []
        }
    }

    render() {
        return (
            <>
                <div className='ml-3 mr-3 mt-4 mb-4'>
                    <div>Account details</div>
                    <div className='mt-3'>
                        <input className='w-2/5 h-14 border-solid border-2 border-indigo-600 rounded-md' placeholder='first name'></input>
                        <input className='w-2/5 h-14 border-solid border-2 border-indigo-600 ml-5 rounded-md' placeholder='last name'></input>
                        <input className='w-2/5 h-14 border-solid border-2 border-indigo-600 mt-8 rounded-md' placeholder='E-mail'></input>
                    </div>
                </div>
                <div className='ml-3 mr-3 mt-4 mb-4'>
                    <div>Rezidental address</div>
                    <div className='mt-3'>
                        <input className='w-2/5 h-14 border-solid border-2 border-indigo-600 rounded-md' placeholder='Country'></input>
                        <input className='w-2/5 h-14 border-solid border-2 border-indigo-600 ml-5 rounded-md' placeholder='City'></input>
                        <input className='w-2/5 h-14 border-solid border-2 border-indigo-600 mt-8 rounded-md' placeholder='ZIP/Postal code'></input>
                        <input className='w-2/5 h-14 border-solid border-2 border-indigo-600 mt-8 ml-5  rounded-md' placeholder='Street'></input>
                    </div>
                    <button className="w-1/4 border-solid border-2 border-black rounded-md text-white mt-5 bg-green-500 h-12">Save</button>
                </div>
                <div className='ml-3 mr-3 mt-4 mb-4'>
                    <div>Account verification</div>
                    <div className='mt-3 w-2/5'>
                        <div>
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                            В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                        </div>
                    </div>
                    <button className="w-1/4 border-solid border-2 border-black rounded-md text-white mt-5 bg-green-500 h-12">Verifity account</button>
                </div>

            </>
        )
    }
}