import "./App.css";
import DepartureFrame from "./components/DepartureFrame";

function App() {
  return (
    <>
      <h1>Nu</h1>
      <DepartureFrame url="https://rtd.banenor.no/web_client/std?station=SOL&layout=portrait&content=departure&notice=yes" />
    </>
  );
}

export default App;
