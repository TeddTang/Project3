import React, { useState } from 'react';
import "../styles/style.scss";
import Delete from '../assets/ic_delete.svg';
import Edit from '../assets/ic_edit.svg';
import PopupContentWithInput from './PopupContentWithInput'
import PopupContentAlert from './PopupContentAlert'

const DataList = () => {
    
const dataList = [
    { id: 1, name: 'name', data: 'Data 1' },
    { id: 2, name: 'name', data: 'Data 2' },
    { id: 3, name: 'name', data: 'Data 3456' },
    { id: 4, name: 'name', data: 'Data 3456' },
];


const handleAlertSubmit = () => {
    // 处理弹窗中按钮点击后的逻辑
    console.log('Alert button clicked');
};
const [deleteStudentId, setDeleteStudentId] = useState(null);
const [editingStudentId, setEditingStudentId] = useState(null);
// const [isPopupOpen, setPopupOpen] = useState(false);
const inputTitle = ["學生名稱", "其他資料", "其他資料"];
const placeholderTexts = ["請輸入學生名稱", "請輸入其他資料", "請輸入其他資料"];

const handleEditClick = (studentId) => {
    setEditingStudentId(studentId);
};
const handlePopupClose = () => {
    setEditingStudentId(null);
    setDeleteStudentId(null);
};

const handleDeleteClick = (studentId) => {
    setDeleteStudentId(studentId);
};

const handleTeacherSubmit = (inputValues) => {
    console.log('Teacher 彈窗確定按鈕被點擊，輸入的值是:', inputValues);
    // 在這裡處理 Teacher 彈窗中確定按鈕被點擊時的邏輯
};

return (
    <div className='list'>
        <ul>
            <li className="list_header">
                <span className='font16_medium'>學生名稱</span>
                <span className='font16_medium'>其他資料</span>
            </li>
            {dataList.map(item => (
                <li className='list_context' key={item.id}>
                    <section>
                        <span className='font16_normal'>{item.name}</span>
                        <span className='font16_normal'>{item.data}</span>
                    </section>
                    <section>
                        <img src={Edit} onClick={() => handleEditClick(item.id)} alt="" />
                        {editingStudentId === item.id && (
                            <PopupContentWithInput
                            title="編輯學生"
                            onSubmit={handleTeacherSubmit}
                            onClose={handlePopupClose}
                            inputCount={3}
                            placeholderTexts={placeholderTexts}
                            inputTitle={inputTitle}
                            />
                        )}
                        <img src={Delete} onClick={() => handleDeleteClick(item.id)} alt="" />
                        {deleteStudentId === item.id && (
                        <PopupContentAlert
                            title="刪除資料"
                            onSubmit={handleAlertSubmit}
                            onClose={handlePopupClose}
                            alertText="刪除後將無法復原，確定刪除嗎？"
                            />
                        )}
                    </section>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default DataList;
