import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/navbar/navbar";
import AddUserForm from "./components/users/add-user-form";
import UserList from "./components/users/user-list";
import UserDetails from "./components/users/user-details";
import UserEdit from "./components/users/user-edit";
import UserListFunc from "./components/users/user-list-func";
import Home from "./components/home/home";
import { useSelector } from "react-redux";

function App() {
  const language = useSelector((state) => state.lang.lang);
  return (
    <>
      <Router>
        <MyNavbar />
        <div className="container" dir={language === "ar" ? "rtl" : "ltr"}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/user-list2" exact element={<UserList />} />
            <Route path="/user-list1" exact element={<UserListFunc />} />
            <Route path="/user-details/:id" exact element={<UserDetails />} />
            <Route path="/user-edit/:id" exact element={<UserEdit />} />
            <Route path="/add-user" exact element={<AddUserForm />} />
          </Routes>
        </div>
      </Router>
      {/* <UserList />
        <hr />
        <h2>Functional Component User List</h2>
        <UserListFunc /> */}
      {/* <AddUserForm /> */}
    </>
  );
}

export default App;
