import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import account_enable from '../../assets/ic_account_enable.svg' ;
import account from '../../assets/ic_account.svg' ;
import search_enable from '../../assets/ic_search_enable.svg' ;
import search from '../../assets/ic_search.svg' ;
import question_enable from '../../assets/ic_qa_enable.svg' ;
import question from '../../assets/ic_qa.svg' ;
import point_enable from '../../assets/ic_point_enable.svg' ;
import point from '../../assets/ic_point.svg' ;
import group_enable from '../../assets/ic_group_enable.svg' ;
import group from '../../assets/ic_group.svg' ;
import logout from '../../assets/ic_logout.svg' ;
import "../../styles/style.scss";


const Sidebar = () => {

    const location = useLocation();
    const [selectedPage, setSelectedPage] = useState('');

    React.useEffect(() => {
        const path = location.pathname.substring(1);

        if (path.startsWith('student_info')) {
            setSelectedPage('student_info');
        } else if (path.startsWith('question2')) {
            setSelectedPage('question2');
        } else if (path.startsWith('contest')) {
            setSelectedPage('contest');
        } else if (path.startsWith('search')) {
            setSelectedPage('search');
        } else if (path.startsWith('group0')) {
            setSelectedPage('group0');
        } else {
            setSelectedPage('');
        }
    }, [location.pathname]);

    return(
    <div>
        <div className="bar__side">
            <p className="font24">測驗系統</p>
            <section className='bar__side_main'>
            <ul>
                <li className={selectedPage === 'student_info' ? 'active' : ''}><Link className='a_title' to="/student_info">
                    <img src={selectedPage === 'student_info' ? account_enable : account} alt="" />
                    個人資料</Link>
                </li>
                <li className={selectedPage === 'question2' ? 'active' : ''}><Link className='a_title' to="/question2">
                    <img src={selectedPage === 'question2' ? question_enable : question} alt="" />
                    題目管理</Link>
                </li>
                <li className={selectedPage === 'contest' ? 'active' : ''}><Link className='a_title' to="/contest">
                    <img src={selectedPage === 'contest' ? point_enable : point} alt="" />
                    線上競賽</Link>
                </li>
                <li className={selectedPage === 'search' ? 'active' : ''}><Link className='a_title' to="/search">
                    <img src={selectedPage === 'search' ? search_enable : search} alt="" />
                    成績查詢</Link>
                </li>
                <li className={selectedPage === 'group0' ? 'active' : ''}><Link className='a_title' to="/group0">
                    <img src={selectedPage === 'group0' ? group_enable : group} alt="" />
                    分組管理</Link>
                </li>
            </ul>
            <ul>
            <li className='logout'><Link to="/login">
                    <img src={logout}/>
                    登出</Link>
                </li>
            </ul>
            </section>
        </div>
    </div>
    );
};

export default Sidebar;