import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import teacher_enable from '../assets/ic_teacher_enable.svg' ;
import teacher from '../assets/ic_teacher.svg' ;
import student_enable from '../assets/ic_student_enable.svg' ;
import student from '../assets/ic_student.svg' ;
import question_enable from '../assets/ic_qa_enable.svg' ;
import question from '../assets/ic_qa.svg' ;
import point_enable from '../assets/ic_point_enable.svg' ;
import point from '../assets/ic_point.svg' ;
import group_enable from '../assets/ic_group_enable.svg' ;
import group from '../assets/ic_group.svg' ;
import logout from '../assets/ic_logout.svg' ;
import "../styles/style.scss";


const Sidebar = () => {

    const location = useLocation();
    const [selectedPage, setSelectedPage] = useState('');
    const [studentSubPage, setStudentSubPage] = useState('');
    const [pointSubPage, setPointSubPage] = useState('');

    React.useEffect(() => {
        const path = location.pathname.substring(1);

        if (path.startsWith('teacher')) {
            setSelectedPage('teacher');
        } else if (path.startsWith('student')) {
            setSelectedPage('student');
            setStudentSubPage(path === 'student' ? 'info' : path); // 设置子页面状态
        } else if (path.startsWith('point')) {
            setSelectedPage('point');
            setPointSubPage(path === 'point' ? 'info' : path); // 设置子页面状态
        } else if (path.startsWith('question')) {
            setSelectedPage('question');
        } else if (path.startsWith('group')) {
            setSelectedPage('group');
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
                <li className={selectedPage === 'teacher' ? 'active' : ''}><Link className='a_title' to="/teacher">
                    <img src={selectedPage === 'teacher' ? teacher_enable : teacher} alt="" />
                    教師管理</Link>
                </li>
                <li className={selectedPage === 'student' ? 'active2' : ''}>
                    <Link className='a_title' to="/student">
                        <img src={selectedPage === 'student' ? student_enable : student} alt="" />
                        學生管理
                    </Link>
                    {selectedPage === 'student' && (
                        <ul className="submenu">
                        <li className={studentSubPage === 'info' ? 'active3' : ''}>
                            <Link to="/student">- 學生資料</Link>
                        </li>
                        <li className={studentSubPage === 'student2' ? 'active3' : ''}>
                            <Link to="/student2">- 學生成績</Link>
                        </li>
                    </ul>
                    )}
                </li>
                <li className={selectedPage === 'question' ? 'active' : ''}><Link className='a_title' to="/question">
                    <img src={selectedPage === 'question' ? question_enable : question} alt="" />
                    題目管理</Link>
                </li>
                <li className={selectedPage === 'point' ? 'active2' : ''}>
                    <Link className='a_title' to="/point">
                        <img src={selectedPage === 'point' ? point_enable : point} alt="" />
                        積分管理
                    </Link>
                    {selectedPage === 'point' && (
                        <ul className="submenu">
                        <li className={pointSubPage === 'info' ? 'active3' : ''}>
                            <Link to="/point">- 積分資料</Link>
                        </li>
                        <li className={(selectedPage === 'point' && (pointSubPage === 'point2' || location.pathname.endsWith('/point_end'))) ? 'active3' : ''}>
                        <Link to="/point2">- 勝負判定</Link>
                    </li>
                    </ul>
                    )}
                </li>
                
                <li className={selectedPage === 'group' ? 'active' : ''}><Link className='a_title' to="/group">
                    <img src={selectedPage === 'group' ? group_enable : group} alt="" />
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