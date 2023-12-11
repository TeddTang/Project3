import React from 'react';
import "../../styles/style.scss";

const ContestContext = ({ title, buttons, dataList }) => {
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

    const renderDataList = () => {
        const answers = dataList;

    return (
        <div className="result">
            <div className="result_list">
                {answers.map((data, index) => (
                    <div key={index} className='result_answers'>
                        {index < 3 && data.image && <img src={data.image} alt={`Image for ${data.name}`} />}
                        <p>{data.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    };

    return (
        <div className='point_frame'>
            <div className='point_view'>
                {renderDataList()}
            </div>
            <div className='group_btn'>
                {renderButtons()}
            </div>
        </div>
    );
};

export default ContestContext;
