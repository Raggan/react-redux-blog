import React, { Component } from "react";
import ReactDOM from "react-dom";
import { provider } from "react-redux";
import { connect } from "redux";

import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#root"));
