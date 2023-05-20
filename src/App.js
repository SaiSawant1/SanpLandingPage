import  { WindowProvider } from "./context/WidthContext";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <WindowProvider >
      <LandingPage/> 
    </WindowProvider>
    
  );
}

export default App;
