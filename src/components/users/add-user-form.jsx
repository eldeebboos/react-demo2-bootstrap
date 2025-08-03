import { useState } from "react";

function AddUserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isAdmin: false,
  });

  console.log("User:", user.name.length);

  const [errors, setErrors] = useState({
    userNameError: "",
    emailError: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    //check for errors
    if (errors.userNameError.length > 0) {
      alert("User name error: " + errors.userNameError);
      return;
    }
    if (errors.emailError.length > 0) {
      alert("Email error: " + errors.emailError);
      return;
    }
    console.log("User added:", user);
    // Reset form
    setUser({
      name: "",
      email: "",
      isAdmin: false,
    });
    setErrors({
      userNameError: "",
      emailError: "",
    });
  };

  const handleChange = (input, func) => {
    func();

    if (input.name === "name") {
      // Validate user name
      if (input.value.length === 0) {
        setErrors({
          ...errors,
          userNameError: "User name is required",
        });
      } else if (input.value.length < 3) {
        setErrors({
          ...errors,
          userNameError: "User name must be at least 3 characters long",
        });
      } else if (input.value.length > 10) {
        setErrors({
          ...errors,
          userNameError: "User name must be at most 10 characters long",
        });
      } else {
        setErrors({
          ...errors,
          userNameError: "",
        });
      }
    }
  };

  return (
    <>
      <h2>Add User</h2>
      <form onSubmit={(e) => submitForm(e)}>
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-3 col-form-label">
            User Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className={
                `form-control` +
                (errors.userNameError.length > 0 && user.name.length === 0
                  ? " is-invalid"
                  : "  is-valid")
              }
              id="name"
              name="name"
              value={user.name}
              onChange={(e) =>
                handleChange(e.target, () =>
                  setUser({ ...user, name: e.target.value })
                )
              }
            />
          </div>
          <small className="text-danger">{errors.userNameError}</small>
        </div>

        <div className="mb-3 row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="isAdmin"
            name="isAdmin"
            checked={user.isAdmin}
            onChange={(e) => setUser({ ...user, isAdmin: e.target.checked })}
          />
          <label htmlFor="isAdmin" className="form-check-label">
            Is Admin
          </label>
        </div>
        {/* <button type="submit" className="btn btn-primary" onClick={submitForm}> */}
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </>
  );
}

export default AddUserForm;
