import React, { useState, useEffect } from 'react';
import "../styles/style.scss";
import Sidebar from './Sidebar';
import Back from '../assets/ic_back.svg'
import { Link } from 'react-router-dom';
import GroupContext from "./GroupContext";
import { useNavigate } from 'react-router-dom';


const Group2 = () => {
    // const initialTime = 120; // 初始时间为120秒
    // const [remainingTime, setRemainingTime] = useState(initialTime);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setRemainingTime(remainingTime => remainingTime - 1);
    //     }, 1000);
    
    //     return () => clearInterval(timer);
    // }, []);

    // const handleExtendTime = () => {
    //     // 使用函数形式确保正确更新状态
    //     setRemainingTime(remainingTime => remainingTime + 30);
    // };
    
    const handleEndGrouping = () => {
        // 执行结束分组的逻辑
        console.log('Ending grouping...');
        
        // 在这里执行导航到 GroupFinish 页面的逻辑
        navigate('/group_finish2');
    };

    const buttonsConfig = [
        // { id: 'extendTime', text: '延長時間', color: '#474FB2', onClick: handleExtendTime},
        // { text: '重新開始', color: '#F2A62B' },
        { id: 'endGrouping', text: '結束分組', color: '#E3563E', onClick: handleEndGrouping },
    ];

    return(
        <div className="main">
        <Sidebar />
        <div className="main_container">
            <div className="data_header">
                <section className='page-back'>
                    <Link to="/group" className='page-back'>
                        <img src={Back} alt="" />
                        <p className="font32" >隨機分組</p>
                    </Link>
                    
                </section>
                {/* <div className='page-time'>
                        <p className='font16_medium'>倒數 {remainingTime} 秒</p>
                    </div> */}
            </div>
            <GroupContext title="分組中...請稍候" buttons={buttonsConfig} />
        </div>
    </div>
    )
}

export default Group2;
