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
                            Lorem Ipsum - ััะพ ัะตะบัั-"ััะฑะฐ", ัะฐััะพ ะธัะฟะพะปัะทัะตะผัะน ะฒ ะฟะตัะฐัะธ ะธ ะฒัะฑ-ะดะธะทะฐะนะฝะต. Lorem Ipsum ัะฒะปัะตััั ััะฐะฝะดะฐััะฝะพะน "ััะฑะพะน" ะดะปั ัะตะบััะพะฒ ะฝะฐ ะปะฐัะธะฝะธัะต ั ะฝะฐัะฐะปะฐ XVI ะฒะตะบะฐ.
                            ะ ัะพ ะฒัะตะผั ะฝะตะบะธะน ะฑะตะทัะผัะฝะฝัะน ะฟะตัะฐัะฝะธะบ ัะพะทะดะฐะป ะฑะพะปัััั ะบะพะปะปะตะบัะธั ัะฐะทะผะตัะพะฒ ะธ ัะพัะผ ััะธััะพะฒ, ะธัะฟะพะปัะทัั Lorem Ipsum ะดะปั ัะฐัะฟะตัะฐัะบะธ ะพะฑัะฐะทัะพะฒ. Lorem
                        </div>
                    </div>
                    <button className="w-1/4 border-solid border-2 border-black rounded-md text-white mt-5 bg-green-500 h-12">Verifity account</button>
                </div>

            </>
        )
    }
}