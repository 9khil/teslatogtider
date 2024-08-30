import "./App.css";
import DepartureFrame from "./components/DepartureFrame";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="departure-frame-container">
        <DepartureFrame
          station="Myrvoll"
          url="https://rtd.banenor.no/web_client/std?station=MYV&layout=portrait&content=departure&notice=yes"
        />
        <DepartureFrame
          station="Solbråtan"
          url="https://rtd.banenor.no/web_client/std?station=SOL&layout=portrait&content=departure&notice=yes"
        />
        <DepartureFrame
          station="Rosenholm"
          url="https://rtd.banenor.no/web_client/std?station=RSH&layout=portrait&content=departure&notice=yes"
        />
      </div>
    </>
  );
}

export default App;
