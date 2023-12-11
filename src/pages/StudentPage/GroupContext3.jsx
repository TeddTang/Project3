import React from 'react';
import GroupPublic3 from './GroupPublic3';
// import GroupAdd from '../../assets/ic_group_add.svg'


const GroupContext = ({ title, buttons, dataList, onButtonClick }) => {

    const [activeComponent, setActiveComponent] = React.useState(dataList[0]?.id || null);

    const renderButtons = () => {
        return buttons.map((button, index) => (
            <button 
            key={button.id}
            style={{ backgroundColor: button.color, marginRight: button.id === activeComponent ? '20px' : '40px' }}
            onClick={() => {
            onButtonClick(button.id);
            button.onClick();
            }}
            className={button.id === activeComponent ? 'active' : ''}
            >
            {button.text}
            </button>
        ));
    };
    
    // const handleButtonClick2 = () => {
    //     console.log('Button clicked!');
    // };

    const renderGroupPublics = () => {
        if (Array.isArray(dataList)) {
            return dataList.map((dataItem) => (
                <GroupPublic3
                    key={dataItem.id}
                    memberId={dataItem.id}
                    memberNames={dataItem.names}
                    isActive={activeComponent === dataItem.id}
                />
            ));
        } else {
            return null;
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
