import React, { useState, useEffect } from 'react';
import "../../styles/style.scss";
import Sidebar from './Sidebar2';
import PointContext from "../PointContext";
import { useNavigate } from 'react-router-dom';


const Group2 = () => {
    const navigate = useNavigate();
    const initialTime = 120; // 初始时间为120秒
    const [remainingTime, setRemainingTime] = useState(initialTime);

    const handleEndPoint = () => {
        // 执行结束分组的逻辑
        console.log('Ending grouping...');

        // 在这里执行导航到 GroupFinish 页面的逻辑
        navigate('/contest_end');


    };

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(remainingTime => remainingTime - 1);
        }, 1000);
    
        return () => clearInterval(timer);
    }, []);

    const buttonsConfig = [
        { id: 'confirm', text: '確定', color: '#474FB2', onClick: handleEndPoint},
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
            <div className="data_header">
                
                <p className="font32" >線上競賽</p>
                <div className='page-time'>
                        <p className='font16_medium'>倒數 {remainingTime} 秒</p>
                </div>
            </div>
            <PointContext buttons={buttonsConfig} dataList={dataList} />
        </div>
    </div>
    )
}

export default Group2;
