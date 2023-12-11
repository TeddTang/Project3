import React from 'react';
import "../styles/style.scss";
import GroupPublic from './GroupPublic';


const GroupContext = ({ title, buttons, dataList }) => {

    const renderButtons = () => {
        return buttons.map((button, index) => (
            <button 
            key={index} 
            style={{ backgroundColor: button.color }}
            onClick={button.onClick}
            // onClick={() => handleButtonClick(button)}
            >
            {button.text}
            </button>
        ));
    };
    
    // const handleButtonClick2 = () => {
    //     console.log('Button clicked!');
    // };

    const renderGroupPublics = () => {
        // 检查 dataList 是否已定义且为数组
        if (Array.isArray(dataList)) {
            return dataList.map((dataItem) => (
                <GroupPublic
                    key={dataItem.id}
                    memberId={dataItem.id}
                    memberNames={dataItem.names}  // 假设每个 dataItem 有一个名为 names 的数组
                />
            ));
        } else {
            // 返回默认值或处理 dataList 不是数组的情况
            return null; // 或者返回一些默认内容
        }
    };

    return (
        <div className='group_frame'>
            <div className='group_view'>
                <p className='group_view-title font24'>{title}</p>
                <section className='group_view-context'>
                {renderGroupPublics()}
                </section>
            </div>
            <div className='group_btn'>
                {renderButtons()}
            </div>
            
        </div>
    );
};

export default GroupContext;
