import React from "react";

import Header from "../ui/header/Header";
import Footer from "../ui/footer/Footer";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
