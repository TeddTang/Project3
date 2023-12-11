import React, { useState, useEffect } from 'react';
import "../../styles/style.scss";
import Sidebar from './Sidebar2';
import { Link } from 'react-router-dom';
import GroupContext2 from "./GroupContext2";
import { useNavigate } from 'react-router-dom';


const Group2 = () => {
    const initialTime = 120; // 初始时间为120秒
    const [remainingTime, setRemainingTime] = useState(initialTime);
    const [activeComponent, setActiveComponent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(remainingTime => remainingTime - 1);
        }, 1000);
    
        return () => clearInterval(timer);
    }, []);

    
    const handleEndGrouping = () => {
        // 执行结束分组的逻辑
        console.log('Ending grouping...');
        
        // 在这里执行导航到 GroupFinish 页面的逻辑
        navigate('/group0end');
    };

    const handleComponentButtonClick = (componentId) => {
        // 設定激活的組件
        setActiveComponent(componentId);
    };

    const buttonsConfig = [
        { id: 'confirm', text: '確定組別', color: '#474FB2', onClick: () => handleEndGrouping()},
    ];

    const dataList = [
        { id: 1, names: ['學生名稱1', '學生名稱2', '學生名稱3','學生名稱'] },
        { id: 2, names: ['學生名稱4', '學生名稱5'] },
        { id: 3, names: ['學生名稱6'] },
        { id: 4, names: ['學生名稱7', '學生名稱8', '學生名稱9'] },
    ];

    return(
        <div className="main">
        <Sidebar />
        <div className="main_container">
            <div className="data_header">
                <section className='page-back'>
                    <Link to="/group" className='page-back'>
                        <p className="font32" >自由分組</p>
                    </Link>
                </section>
                <div className='page-time'>
                        <p className='font16_medium'>倒數 {remainingTime} 秒</p>
                    </div>
            </div>
            <GroupContext2 title="請選擇一個想參加的組別" 
            activeComponent={activeComponent}
            onButtonClick={handleComponentButtonClick}
            buttons={buttonsConfig} dataList={dataList} />
        </div>
    </div>
    )
}

export default Group2;
