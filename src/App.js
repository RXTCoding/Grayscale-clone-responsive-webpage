import React from "react";
import Toolbar from "./components/Toolbar";
import "./styles.css";
import SideDrawer from "./components/sidemenu/SideDrawer";
import BackDrop from "./components/backdrop/BackDrop";
// import Header from "./components/Header"
import MainBody from "./components/MainBody";
import "./MyAppStyle.css";
// import SideMenu from "./components/sidemenu/SideMenu";
// import "./components/ToolBar.css";
// import "./components/sidemenu/SideMenu";
// import menuToggleButton from "./components/sidemenu/SideMenu";

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <main>
          <div className="Bodycontainer">
            <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />

            <div className="mainBodyContainer">
              <MainBody />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
