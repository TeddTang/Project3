import React, { useState } from 'react';
import "../../styles/style.scss";
import Sidebar from './Sidebar2';
import DataListInfo from './DataListInfo';
import search from '../../assets/ic_search.svg' ;


const Student = () => {

    return(
        <div className="main">
        <Sidebar />
        <div className="main_container">
            <div className="data_header">
            <p className="font32" >成績查詢</p>
            <div className='input_search'>
                <div className='input_style'>
                    <img src={search} alt="" />
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder='請輸入關鍵字'
                    />
                    
                    
                </div>
            </div>
            </div>
            <DataListInfo />
            <div className="list_teacher">

            </div>
        </div>
    </div>
    )
}

export default Student;
