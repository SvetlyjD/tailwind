import React from 'react';
import { Route, Routes } from 'react-router';

export default class SecuritySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: []
    }
  }

  render() {
    return (
      <div>
        <div className='ml-3 mr-3 mt-4 mb-4'>
          <div>Security setting</div>
          <div className='mt-3'>
            <input className='w-4/12 h-14 border-solid border-2 border-indigo-600 rounded-md' placeholder='Password'></input>                    </div>
          <div className='text-green-600 mt-2'>Reset password</div>
          <div className='mt-3'>Bind an account</div>
          <div className='flex'>
            <div className='mt-1 mr-2 w-5 h-5'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" />
            </div>
            <div>ivan_ivanov</div>
            <div className='mt-1 ml-4 w-5 h-5'>
              <img src="https://emojiguide.org/images/emoji/y/ryxtozn785qy.png" alt="" />
            </div>
            <div className='mt-1 ml-12 w-5 h-5'>
              <img src="https://le-cdn.website-editor.net/84154a667b89439fb4345aedd7de7442/dms3rep/multi/opt/Bewertung_auf_Google-cb98d149-640w.png" alt="" />
            </div>
            <div className='text-green-600 ml-1'>bind +</div>

            <div className='mt-1 ml-12 w-5 h-5'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ936Q_IuUfMGkU0F4soq8_bHml0Z2JU0br0Ya_aIBse5Of5jo_JxO7_X2Q8KjveXwWTag&usqp=CAU" alt="" />
            </div>
            <div className='text-green-600 ml-1'>bind +</div>
          </div>
          <button className="h-12 bg-green-500 w-1/4 border-solid border-2 border-black rounded-md text-white mt-5">Save</button>
        </div>
      </div>
    )
  }
}