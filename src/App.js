import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import Student2 from "./pages/Student2";
import Question from "./pages/Question";
import Question2 from "./pages/StudentPage/Question2";
import Search from "./pages/StudentPage/Search";
import Point from "./pages/Point";
import PointEnd from "./pages/PointEnd";
import Point2 from "./pages/Point2";
import Group0 from "./pages/StudentPage/Group0";
import Group0End from "./pages/StudentPage/Group0End";
import Group from "./pages/Group";
import Group2 from "./pages/Group2";
import Group2_1 from "./pages/Group2_1";
import Login from "./pages/Login";
import GroupFinish from "./pages/GroupFinish"
import GroupFinish2 from "./pages/GroupFinish2"
import StudentInfo from "./pages/StudentPage/StudentInfo";
import Contest from "./pages/StudentPage/Contest";
import ContestEnd from "./pages/StudentPage/ContestEnd";
import './App.css';



export default function App() {
  return (
    
    <div>
      <BrowserRouter basename="/Project3">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student_info" element={<StudentInfo />} />
          <Route path="/student2" element={<Student2 />} />
          <Route path="/question" element={<Question />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/group0" element={<Group0 />} />
          <Route path="/group0end" element={<Group0End />} />
          <Route path="/group" element={<Group />} />
          <Route path="/group2" element={<Group2 />} />
          <Route path="/group2_1" element={<Group2_1 />} />
          <Route path="/point" element={<Point />} />
          <Route path="/point2" element={<Point2 />} />
          <Route path="/point_end" element={<PointEnd />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/contest_end" element={<ContestEnd />} />
          <Route path="/login" element={<Login />} />
          <Route path="/group_finish" element={<GroupFinish />} />
          <Route path="/group_finish2" element={<GroupFinish2 />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

