import React, { useState } from 'react';
import "../styles/style.scss";
import Sidebar from './Sidebar';
import DataList from './DataList';
import PopupContentWithInput from './PopupContentWithInput'



const Teacher = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const inputTitle = ["教師名稱", "其他資料", "其他資料"];
    const placeholderTexts = ["請輸入教師名稱", "請輸入其他資料", "請輸入其他資料"];
    const handleButtonClick = () => {
        setPopupOpen(true);
    };
    
    
    const handleTeacherSubmit = (inputValues) => {
    console.log('Teacher 彈窗確定按鈕被點擊，輸入的值是:', inputValues);
    // 在這裡處理 Teacher 彈窗中確定按鈕被點擊時的邏輯
    };
    

    return(
    <div className="main">
        <Sidebar />
        <div className="main_container">
            <div className="data_header">
                <p className="font32" >教師管理</p>
                <button onClick={handleButtonClick}>新增教師</button>
                {isPopupOpen && (
                    <PopupContentWithInput
                    title="新增教師"
                    onSubmit={handleTeacherSubmit}
                    onClose={() => setPopupOpen(false)}
                    inputCount={3}
                    placeholderTexts={placeholderTexts}
                    inputTitle={inputTitle}
                    />
                )}
            </div>
            <DataList />
            <div className="list_teacher">
            </div>
        </div>
    </div>
    )
}

export default Teacher;
