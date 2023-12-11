import React from 'react';
import "../styles/style.scss";
import Sidebar from './Sidebar';
import Back from '../assets/ic_back.svg'
import { Link } from 'react-router-dom';
import GroupContext from "./GroupContext";
import { useNavigate } from 'react-router-dom';


const Group2 = () => {
    const navigate = useNavigate();
    const handleReStart = () => {
        // 执行结束分组的逻辑
        console.log('Restart...');
        
        // 在这里执行导航到 GroupFinish 页面的逻辑
        navigate('/group2_1');
    };
    const buttonsConfig = [
        // { text: '延長時間', color: '#474FB2' },
        { id: 'reStart', text: '重新開始', color: '#F2A62B', onClick: handleReStart},
        // { text: '結束分組', color: '#E3563E' },
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
                        <img src={Back} alt="" />
                        <p className="font32" >隨機分組</p>
                    </Link>
                    
                </section>
                <div className='page-time'>
                    <p className='font16_medium'>分組完成</p>
                </div>
            </div>
            <GroupContext title="已完成分組" buttons={buttonsConfig} dataList={dataList}/>
        </div>
    </div>
    )
}

export default Group2;
