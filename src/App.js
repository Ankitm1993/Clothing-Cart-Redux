import React from "react";
import Navbar from "./Navbar";
import StoreContainer from "./StoreContainer";
// import StoreItem from "./StoreItem";
import Loading from "./Loading";

import { useGlobalContext } from "./Context";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className='app'>
      <Navbar />
      <div className='app__body'>
        <StoreContainer />
      </div>
    </div>
  );
}

export default App;
