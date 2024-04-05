
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './pages/home.js';
import { Login } from './pages/login.js';
import { StudentSignup } from './pages/student/signUp.js';
import { FacultySignup } from './pages/faculty/signUp.js';
import { StaffSignup } from './pages/staff/signUp.js';
import { StaffHome } from './pages/staff/home.js';
import { StudentHome } from './pages/student/home.js';
import { FacultyHome } from './pages/faculty/home.js';
import { Navbar } from './components/navbar.js';
import { useSelector } from 'react-redux';
import { AllCoursesPage } from './pages/student/allCourses.js';
import { CoursePage } from './pages/student/courseById.js';
import { RegisteredCoursePage } from './pages/student/registeredCourses.js';
import { NewComplainPage } from './pages/student/newComplain.js';
import { RegisteredComplainPage } from './pages/student/registeredComplain.js';
import { Timetable } from './pages/student/timetable.js';
import { AnnouncementById } from './pages/student/announcementById.js';

import { useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme.js'
import { ComplaintById } from './pages/student/complainById.js';


function App() {
  const [value, setValue] = useState(0);
  const isAuth = Boolean(useSelector((state) => state.token));
  const theme = useMemo(() => createTheme(themeSettings()));

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={< Login value={value} />} />
            <Route path="/signup/student" element={<StudentSignup value={value} setValue={setValue} />} />
            <Route path="/signup/faculty" element={<FacultySignup value={value} setValue={setValue} />} />
            <Route path="/signup/staff" element={<StaffSignup value={value} setValue={setValue} />} />
            <Route path='/staff/:id' element={isAuth ? <StaffHome /> : <Navigate to="/" />} />
            <Route path='/student/:id' element={isAuth ? <StudentHome /> : <Navigate to="/" />} />
            <Route path='/faculty/:id' element={isAuth ? <FacultyHome /> : <Navigate to="/" />} />
            <Route path='/student/:id/additionalCourse/all' element={isAuth ? <AllCoursesPage /> : <Navigate to="/" />} />
            <Route path='/student/:id/additionalCourse/registered' element={isAuth ? <RegisteredCoursePage /> : <Navigate to="/" />} />
            <Route path='/student/:id/additionalCourse/:courseId' element={isAuth ? <CoursePage /> : <Navigate to="/" />} />
            <Route path='/student/:id/eComplaint/submit' element={isAuth ? <NewComplainPage /> : <Navigate to="/" />} />
            <Route path='/student/:id/eComplaint/all' element={isAuth ? <RegisteredComplainPage /> : <Navigate to="/" />} />
            <Route path='/student/:id/eComplaint/:complaintId' element={isAuth ? <ComplaintById/> : <Navigate to="/" />} />
            <Route path='/student/:id/timetable' element={isAuth ? <Timetable /> : <Navigate to="/" />} />
            <Route path='/student/:id/announcement/:announcementId' element={isAuth ? <AnnouncementById /> : <Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </Router>

    </div>
  );
}

export default App;


/** take care of the registered course */