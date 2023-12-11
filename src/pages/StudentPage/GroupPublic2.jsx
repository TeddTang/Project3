// GroupPublic2.jsx

import React from 'react';

const GroupPublic2 = ({ memberId, memberNames, onButtonClick, isActive }) => {
    return (
        <div className='group_public-frame'>
        <div className={`group_public ${isActive ? 'active' : ''}`}>
            <div className='group_public-title'>
            <p className='font16_medium'>{`組別 ${memberId}`}</p>
            </div>
            <section className='group_number'>
            {memberNames.map((name, index) => (
                <p key={index}>{name}</p>
            ))}
            </section>
        </div>
        <button className='group_add' onClick={onButtonClick}></button>
        </div>
    );
};

export default GroupPublic2;
