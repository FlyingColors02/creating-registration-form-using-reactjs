import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom";
import App from "./app";

ReactDOM.render(<BrowserRouter>
<App/>
</BrowserRouter>,document.querySelector("#root"));