import React from 'react';

const GroupPublic = ({ memberId, memberNames, onClick, showButton, isActive }) => {
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
            {showButton && (
                <button onClick={onClick}>+</button>
            )}
        </div>
    );
};

export default GroupPublic;
