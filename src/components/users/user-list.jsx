import React from "react";

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
  }
  render() {
    return (
      <>
        {this.state.isAuthenticated && (
          <div>
            <h2>User List</h2>
            <ul>
              {this.state.users.map((user) => {
                if (!user.isDeleted) {
                  return (
                    <li key={user.id}>
                      {user.name} - {user.email}{" "}
                      {user.isAdmin ? (
                        <span className="badge bg-success ms-2">Admin</span>
                      ) : (
                        <span className="badge bg-secondary ms-2">User</span>
                      )}
                    </li>
                  );
                }
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
          onClick={() => this.setState({ isAuthenticated: !this.state.isAuthenticated })}
          className="btn btn-primary mt-3"
        >
          Toggle Authentication
        </button>
      </>
    );
  }
}

export default UserList;
