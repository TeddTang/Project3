import React, { useState } from 'react';
import "../styles/style.scss";

const PointContext = ({ title, buttons, dataList }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const renderButtons = () => {
        return buttons.map((button, index) => (
            <button
                key={index}
                style={{ backgroundColor: button.color }}
                onClick={button.onClick}
            >
                {button.text}
            </button>
        ));
    };

    const handleAnswerClick = (answerId) => {
        setSelectedAnswer(answerId);
    };

    const renderDataList = () => {
        // 从 dataList 中排除第一个元素，因为它是标题
        const answers = dataList.slice(1);

        return (
            <div className="point">
                <div className="point_title">
                    <p>{dataList[0].name}</p>
                </div>
                <div className="point_list">
                    {answers.map((data, index) => (
                        <div key={index} className={`point_answers ${selectedAnswer === data.id ? 'selected' : ''}`}
                            onClick={() => handleAnswerClick(data.id)}>
                            <p>{data.name}</p>
                            {/* 其他内容 */}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className='point_frame'>
            <div className='point_view'>
                {/* <p className='group_view-title font24'>{title}</p> */}
                
                {renderDataList()}
                
            </div>
            <div className='group_btn'>
                {renderButtons()}
            </div>
        </div>
    );
};

export default PointContext;
