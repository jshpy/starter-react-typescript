import React from "react";
import ReactDOM from "react-dom";

import "./styles/style.scss";

import { App } from "./components/App";

let ROOT = document.querySelector(".container");

ReactDOM.render(<App name="Zhangxu" />, ROOT);
