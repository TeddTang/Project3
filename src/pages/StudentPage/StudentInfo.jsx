import React, { useState } from 'react';
import "../../styles/style.scss";
import Sidebar from './Sidebar2';

const StudentInfo = () => {
    const [username, setUsername] = useState('username');
    const [other, setOther] = useState('other');

    return (
        <div className="main">
            <Sidebar />
            <div className="main_container">
                <div className="data_header">
                    <p className="font32">個人資料</p>
                    <button>儲存</button>
                </div>
                <div className='point_msg'>
                    <div className='input'>
                        <label htmlFor="username">姓名</label>
                        <input
                            className='input_normal'
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='請輸入姓名'
                        />
                    </div>
                    <div className='input'>
                        <label htmlFor="other">其他資料</label>
                        <input
                            className='input_normal'
                            type="text"
                            id="other"
                            name="other"
                            value={other}
                            onChange={(e) => setOther(e.target.value)}
                            placeholder='請輸入資料'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentInfo;
