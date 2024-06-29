import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';

// Import statement to indicate to bundle ./index.scss
import "./index.scss";

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  onsole.log('MyFlixApplication is being rendered');
  return (
    <Container style={{ backgroundColor:'lightcoral', padding:'20px'}}>
      <MainView />
    </Container>
  )
};

// Finds the root of the app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render the app in the root DOM element
root.render(<MyFlixApplication />); 
//U P D A T E D