import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CustomerTickets from "./components/CustomerTickets";
import { Suspense, useState } from "react";
import ShowCard from "./components/ShowCard";

const cardData = fetch("./data.json").then((res) => res.json());
function App() {
  const [inProgress, setInPorgress] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [resolve, setResolve] = useState(0);
  const [complete, setComplete] = useState([]);
  const [filterCard , setFilterCard]=useState([])

  const removeCard = (card) => {
    const filter = clicked.filter((c) => c.id !== card.id);
    setClicked(filter);
    
  };
 

  return (
    <div>
      <Navbar></Navbar>

      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen ">
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 animate-pulse"></div>
              <h2 className="text-2xl font-medium text-indigo-600 animate-pulse">
                Loading...
              </h2>
            </div>
          </div>
        }
      >
        <ShowCard resolve={resolve} inProgress={inProgress}></ShowCard>
        <CustomerTickets
          setClicked={setClicked}
          clicked={clicked}
          inProgress={inProgress}
          setInPorgress={setInPorgress}
          cardData={cardData}
          setResolve={setResolve}
          resolve={resolve}
          complete={complete}
          setComplete={setComplete}
          removeCard={removeCard}
          filterCard={filterCard}
          setFilterCard= {setFilterCard}
       
        />
      </Suspense>

      <Footer></Footer>
    </div>
  );
}

export default App;
