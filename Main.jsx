import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <button className='signIn'>Sign in</button>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello Aakash</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>

        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder=' Ask to Your AI Assistant...' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Main
