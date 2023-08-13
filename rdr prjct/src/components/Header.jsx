import { useSelector } from "react-redux";



const Header = () => {

  const state = useSelector(store => store)
  console.log(state)

  return (
    <header className="header-container">
      <div className="header-content">
        <img src="./assets/plane.png" alt="Flight Radar" className="logo" />
        <h1 className="title">Flight Radar</h1>
      </div>
      <h3 className="flight-count">
        {
          state.isLoading ? "Loading.." 
          : `Current Flights Listed : ${state.flights.length}`
        }
      </h3>
    </header>
  );
}

export default Header;
