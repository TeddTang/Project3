import React, { useState } from 'react';
import "../styles/style.scss";
import Sidebar from './Sidebar';
import DataList2 from './DataList2';
import PopupContentWithInput from './PopupContentWithInput'


const Student = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const inputTitle = ["學生名稱", "其他資料", "其他資料"];
    const placeholderTexts = ["請輸入學生名稱", "請輸入其他資料", "請輸入其他資料"];
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
                <p className="font32" >學生管理</p>
                <button onClick={handleButtonClick}>新增學生</button>
                {isPopupOpen && (
                    <PopupContentWithInput
                    title="新增學生"
                    onSubmit={handleTeacherSubmit}
                    onClose={() => setPopupOpen(false)}
                    inputCount={3}
                    placeholderTexts={placeholderTexts}
                    inputTitle={inputTitle}
                    />
                )}
            </div>
            <DataList2 />
            <div className="list_teacher">

            </div>
        </div>
    </div>
    )
}

export default Student;
