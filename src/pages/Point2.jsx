import React, { useState, useEffect } from 'react';
import "../styles/style.scss";
import Sidebar from './Sidebar';
import Back from '../assets/ic_back.svg'
import PointContext from "./PointContext";
import { useNavigate } from 'react-router-dom';


const Group2 = () => {
    const navigate = useNavigate();


    const handleEndPoint = () => {
        // 执行结束分组的逻辑
        console.log('Ending grouping...');

        // 在这里执行导航到 GroupFinish 页面的逻辑
        navigate('/point_end');


    };

    const buttonsConfig = [
        { id: 'confirm', text: '正確答案', color: '#474FB2', onClick: handleEndPoint},
        { id: 'error', text: '回答錯誤', color: '#E3563E', onClick: handleEndPoint },
    ];

    const dataList = [
        { id: 1, name: '下列何者不是生命三大要素？' },
        { id: 2, name: '回答一' },
        { id: 3, name: '回答二' },
        { id: 4, name: '回答三' },
        { id: 5, name: '回答四' },
    ];

    return(
        <div className="main">
        <Sidebar />
        <div className="main_container">
            <div className="data_header2">
                
                <p className="font32" >勝負判定</p>
                
            </div>
            <PointContext buttons={buttonsConfig} dataList={dataList} />
        </div>
    </div>
    )
}

export default Group2;
