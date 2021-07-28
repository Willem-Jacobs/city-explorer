import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Layout from "../src/components/ui/Layout";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
