import React from "react";

function Login() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        borderStyle: "dotted",
      }}
    >
      <form
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          // position: "absolute",
          // top: 50,
          // left: 0,
          // right: 0,
          justifyContent: "center",
          borderWidth: 4,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
