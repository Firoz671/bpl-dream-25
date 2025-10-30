import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Available from "./components/Available/Available.jsx";
import Selected from "./components/Selected/Selected.jsx";
import { toast, ToastContainer} from 'react-toastify';
import Footer from "./components/Footer/footer.jsx";
import 'react-toastify/dist/ReactToastify.css';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};


const playersPromise = fetchPlayer();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(60000000000);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  //console.log(selectedPlayers);
  //console.log(playersPromise);

  const removePlayer = (p) =>{
  const filteredData = selectedPlayers.filter(ply=> ply.name!==p.name)
  setSelectedPlayers(filteredData)
  toast("Player Removed")
  setAvailableBalance(availableBalance+parseInt(p.price.split("$").join("").split(",").join("")))
}
  return (
    <div>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1200px] mx-auto mt-3 flex justify-between items-center font-bold">
        <h1>{toggle?'Available Players':`Selected Players ${selectedPlayers.length}/6`}</h1>
        <div className="join join-vertical lg:join-horizontal">
          <button
            onClick={() => setToggle(true)}
            className={`btn join-item border-r-0 ${
              toggle === true ? "bg-lime-400" : ":"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn join-item border-l-0 ${
              toggle === false ? "bg-lime-400" : ":"
            }`}
          >
            Selected <span>({selectedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<div className="max-w-[1200px] flex justify-center items-center mx-auto"><span className="loading loading-dots loading-xl"></span></div>}
        >
          <Available
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            playersPromise={playersPromise}
          ></Available>
        </Suspense>
      ) : (
        <Selected removePlayer={removePlayer} selectedPlayers={selectedPlayers} />
      )}
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
