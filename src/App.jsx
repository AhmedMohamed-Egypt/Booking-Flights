import { FlightProvider } from "./Context/FlightContext";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <FlightProvider>
      <LandingPage />
    </FlightProvider>
  );
}

export default App;
