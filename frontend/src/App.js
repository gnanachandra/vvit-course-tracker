import AddCourse from './components/AddCourse';
//import DisplayCard from './components/DisplayCard';
//import ViewStudents from './components/ViewStudents';
////import UserProfile from './components/UserProfile';
import Register from './components/Register';
import Announcements from './components/Announcements';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserProfile from './components/UserProfile';
import AdminDashBoard from './components/Admin/AdminDashBoard';

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path='/UserProfile' element={<UserProfile/>}></Route>
          <Route path='/AddCourse' element={<AddCourse/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/' element={<Announcements/>}></Route>
          <Route path='/adminDashboard' element={<AdminDashBoard/>}></Route>
          <Route path='/Annoucements' element={<Announcements/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
