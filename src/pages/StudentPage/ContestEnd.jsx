import React from 'react';
import "../../styles/style.scss";
import Sidebar from './Sidebar2';
import ContestContext  from "./ContestContext ";
import { useNavigate } from 'react-router-dom';


const Group2 = () => {
    const navigate = useNavigate();

    const handleEndPoint = () => {
        // 执行结束分组的逻辑
        console.log('Ending grouping...');

        // 在这里执行导航到 GroupFinish 页面的逻辑
        navigate('/question2');


    };

    const buttonsConfig = [
        { id: 'confirm', text: '重新設定題目', color: '#474FB2', onClick: handleEndPoint},
    ];

    const dataList = [
        { id: 1, name: '第一名積分學生名稱', image: require('../../assets/ic_no1.svg').default },
        { id: 2, name: '第二名積分學生名稱', image: require('../../assets/ic_no2.svg').default },
        { id: 3, name: '第三名積分學生名稱', image: require('../../assets/ic_no3.svg').default },
        { id: 4, name: '第四名積分學生名稱',  },
        { id: 5, name: '第五名積分學生名稱',  },
    ];

    return(
        <div className="main">
        <Sidebar />
        <div className="main_container">
            <div className="data_header"> 
                <p className="font32" >競賽結果</p>
            </div>
            <ContestContext  buttons={buttonsConfig} dataList={dataList} />
        </div>
    </div>
    )
}

export default Group2;
