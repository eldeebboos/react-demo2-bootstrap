import "./App.css";
import MyNavbar from "./components/navbar/navbar";
import AddUserForm from "./components/users/add-user-form";
import UserList from "./components/users/user-list";
import UserListFunc from "./components/users/user-list-func";

function App() {
  return (
    <>
      <MyNavbar />
      <div className="container">
        {/* <UserList />
        <hr />
        <h2>Functional Component User List</h2>
        <UserListFunc /> */}
        <AddUserForm />
      </div>
    </>
  );
}

export default App;
