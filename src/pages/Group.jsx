import React, { useState } from 'react';
import "../styles/style.scss";
import Sidebar from './Sidebar';
import Next from '../assets/ic_group_next.svg'
import PopupContentWithInput from './PopupContentWithInput'



const Group = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isPopupOpen2, setPopupOpen2] = useState(false);
    const inputTitle = ["組數"];
    const placeholderTexts = ["請輸入組數"];
    const handleButtonClick = () => {
        setPopupOpen(true);
    };
    const handleButtonClick2 = () => {
        setPopupOpen2(true);
    };
    const handleTeacherSubmit = (inputValues) => {
        console.log('Teacher 彈窗確定按鈕被點擊，輸入的值是:', inputValues);
        // 在這裡處理 Teacher 彈窗中確定按鈕被點擊時的邏輯
        
    // 此时可以选择是否关闭弹窗，因为点击 Link 会自动触发导航
    setPopupOpen(false);
    setPopupOpen2(false);
    };

    return(
        <div className="main">
        <Sidebar />
        <div className="main_container-group">
            <div onClick={handleButtonClick}>
                <div className='group_free'>
                    <p className='font48'>自由分組</p>
                    <p className='font16_medium'>讓同學可以自行找到組員<br></br>三分鐘後將會自動結束分組</p>
                    <section className='group_footer'>
                        <p>立即開始</p>
                        <img src={Next} alt="" />
                    </section>
                </div>
            </div>
            {isPopupOpen && (
                    <PopupContentWithInput
                    title="設定組數"
                    onSubmit={handleTeacherSubmit}
                    onClose={() => setPopupOpen(false)}
                    inputCount={1}
                    placeholderTexts={placeholderTexts}
                    inputTitle={inputTitle}
                    to="/group2"
                    />
            )}
            <div onClick={handleButtonClick2}>
                <div className='group_free2'>
                    <p className='font48'>隨機分組</p>
                    <p className='font16_medium'>快速讓同學的組別分好<br></br></p>
                    <section className='group_footer'>
                        <p>立即開始</p>
                        <img src={Next} alt="" />
                    </section>
                </div>
            </div>
            {isPopupOpen2 && (
                    <PopupContentWithInput
                    title="設定組數"
                    onSubmit={handleTeacherSubmit}
                    onClose={() => setPopupOpen2(false)}
                    inputCount={1}
                    placeholderTexts={placeholderTexts}
                    inputTitle={inputTitle}
                    to="/group2_1"
                    />
            )}
        </div>
    </div>
    )
}

export default Group;
