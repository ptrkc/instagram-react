import ReactDOM from "react-dom";
import NavbarTop from "./NavbarTop.js";
import Content from "./Content.js";
import NavbarMobile from "./NavbarMobile.js";

function App() {
    return (
        <>
            <NavbarTop />
            <Content />
            <NavbarMobile />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
