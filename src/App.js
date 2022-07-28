import React, {useState, useEffect} from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import './App.css';
import {getFetch} from "./components/FetchMethods";
import Form from "./components/Form";

function App() {
  const LoadingList = WithLoadingList(List);

  const [appStateLoading, setAppStateLoading] = useState(false);
  const [appStateObject, setAppStateObject] = useState(null);

  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if(refresh){
      setAppStateLoading(true);
      getFetch("animals").then(val => setAppStateObject(val))
      setAppStateLoading(false);
      setRefresh(false);
    }
  }, [setAppStateLoading, setAppStateObject, refresh]);

  return (
    <div className="App">
      <div>
        <h2 className="First-Title">Animales</h2>
      </div>
      <div>
        <LoadingList isLoading={appStateLoading} contents={appStateObject} />
        <Form />
      </div>
    </div>
  )   
}

export default App;