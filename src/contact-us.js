import React from "react";
import Header from "./header";

export class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("EVENT", document.getElementById("fileUpload").files[0]);
    alert("A name was submitted: " + this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div
        style={{
          diplay: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <form
          style={{
            display: "flex",
            alignSelf: "center",
            marginTop: 260,
            marginLeft: 250,
          }}
          onSubmit={this.handleSubmit}
        >
          <label>
            Upload File here
            <input
              style={{ backgroundColor: "white" }}
              id="fileUpload"
              type="file"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
