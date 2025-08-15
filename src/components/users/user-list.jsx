import React from "react";
import { connect } from "react-redux";
import Loader from "../../shared/components/loader";
import axiosInstance from "../../axios-config/axios-config";
import changeLanguage from "../../store/actions/language";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          isAdmin: true,
          isDeleted: false,
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          isAdmin: false,
          isDeleted: false,
        },
        {
          id: 3,
          name: "Alice Johnson",
          email: "alice@example.com",
          isAdmin: true,
          isDeleted: false,
        },
        {
          id: 4,
          name: "Bob Brown",
          email: "bob@example.com",
          isAdmin: false,
          isDeleted: true,
        },
      ],
    };

    axiosInstance
      .get("/users", {
        params: {
          api_key: "ascvgd3rdgbsdbtr4dvbsdvds",
          limit: 5,
          page: 1,
          query: "search",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        this.state.users = data;
        console.log("Fetched Users:", data);
      });
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleToggleLanguage() {
    this.props.dispatch(
      changeLanguage(this.props.language === "en" ? "ar" : "en")
    );
  }

  render() {
    return (
      <>
        language: {this.props.language}
        {this.props.loading && <Loader />}
        {this.state.isAuthenticated && (
          <div>
            <h2>User List</h2>
            <ul>
              {this.state.users.map((user) => {
                // if (!user.isDeleted) {
                return (
                  <li key={user.id}>
                    {user.username} - {user.email}{" "}
                    {/* {user.isAdmin ? (
                      <span className="badge bg-success ms-2">Admin</span>
                    ) : (
                      <span className="badge bg-secondary ms-2">User</span>
                    )} */}
                  </li>
                );
                // }
              })}
            </ul>
          </div>
        )}
        {!this.state.isAuthenticated && (
          <div>
            <h2>Please log in to view the user list.</h2>
          </div>
        )}
        <button
          onClick={() =>
            this.setState({ isAuthenticated: !this.state.isAuthenticated })
          }
          className="btn btn-primary mt-3"
        >
          Toggle Authentication
        </button>
        <button
          onClick={() => this.handleToggleLanguage()}
          className="btn btn-success mt-3"
        >
          Toggle language : {this.props.language}
        </button>
      </>
    );
  }
}
//using the redux in class component
const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.loading.loading,
  language: state.lang.lang,
});

export default connect(mapStateToProps)(UserList);
