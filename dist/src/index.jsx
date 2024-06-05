//import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap/lib/Tab"; //Bootstrap components.
import "./index.scss";
import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";

import "./index.scss";

const App = () => {
    return (
        <Container>
          <MainView />
        </Container>
      )};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);