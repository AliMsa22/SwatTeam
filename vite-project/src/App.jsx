import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import UserManagement from './components/UserManagement.jsx';
import HistoryLogs from './components/HistoryLogs.jsx';
import DepartmentManagement from './components/DepartmentManagement.jsx';
import FolderManagement from './components/FolderManagement.jsx';
import Profile from './components/Profile.jsx';
import Home from './components/Home.jsx';
import FolderView from './components/FolderView.jsx';
import EditUser from './components/EditUser.jsx';
import AddDepartment from './components/AddDepartment.jsx';
import EditDepartment from './components/EditDepartment.jsx';
import AddAdmin from './components/AddAdmin.jsx';
import AddFolder from './components/AddFolder.jsx';
import EditFolder from './components/EditFolder.jsx';
import AddFile from './components/AddFile.jsx';
import EditFile from './components/EditFile.jsx';
import EditProfile from './components/EditProfile.jsx';
import './index.css'; // Add your Tailwind CSS file here
import FileView from './components/FileView.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='' element={<Home/>} />
          <Route path='/dashboard/users' element={<UserManagement/>}/>
          <Route path='/dashboard/history_logs' element={<HistoryLogs/>}/>
          <Route path='/dashboard/departments' element={<DepartmentManagement/>}/>
          <Route path='/dashboard/folders' element={<FolderManagement/>}/>
          <Route path='/dashboard/profile' element={<Profile/>}/>
          <Route path='/dashboard/folder/:id' element={<FolderView/>}/>
          <Route path='/dashboard/add_admin' element={<AddAdmin/>}/>
          <Route path='/dashboard/edit_user/:id' element={<EditUser/>}/>
          <Route path='/dashboard/add_department' element={<AddDepartment/>}/>
          <Route path='/dashboard/edit_department/:id' element={<EditDepartment/>}/>
          <Route path='/dashboard/add_folder' element={<AddFolder/>}/>
          <Route path='/dashboard/edit_folder/:id' element={<EditFolder/>}/>
          <Route path='/dashboard/add_file/:id' element={<AddFile/>}/>
          <Route path='/dashboard/edit_file/:id' element={<EditFile/>}/>
          <Route path='/dashboard/edit_profile/:id' element={<EditProfile/>}/>
          <Route path='/dashboard/view_file/:id' element={<FileView/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
