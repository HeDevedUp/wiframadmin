import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "@components/Dashboard";
import Home from "@home/Home";
import Profile from "@user/Profile";
import Settings from "@settings/Settings";
import Users from "@users/Users";
import AddCrop from "./features/addcrop/AddCrop";
import Login from "./features/auth/login";
import SignUpNoW from "./features/auth/registration";
import { Router } from 'react-router-dom';
import AdminUsers from "./features/adminUser/AdminUser";
// import Home from "./features/home/Home";

// import AddCrop from  "@addcrop/AddCrop";


function App() {
    return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUpNoW />} />
        <Route exact path="/" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
            <Route path="adminuser" element={<AdminUsers />} />
            <Route path="/addcrop" element={<AddCrop />} />

        </Route>
  

        <Route
            path="*"
            element={
                <div className="px-8 py-5">
                    <h1>Not found.</h1>
                </div>
            }
        />
    </Routes>
</BrowserRouter>


    );
}

export default App;
