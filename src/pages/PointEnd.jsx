import React, { useState, useEffect } from 'react';
import "../styles/style.scss";
import Sidebar from './Sidebar';
import Back from '../assets/ic_back.svg'
import PointContext from "./PointContext";
import { useNavigate } from 'react-router-dom';


const Group2 = () => {


    return(
        <div className="main">
        <Sidebar />
        <div className="main_container">
            <div className="data_header2">
                
                <p className="font32" >勝負判定</p>
                
            </div>
            <div className='point_msg'>
                判定結束，目前尚無需要判定的題目，請等待同學回答
            </div>
        </div>
    </div>
    )
}

export default Group2;
