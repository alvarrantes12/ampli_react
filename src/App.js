import React, {useState, useEffect} from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import { getFetch } from "./components/FetchMethods";
import { Form } from "./components/Form";

function App() {
  const LoadingList = WithLoadingList(List);
  const [appState, setAppState] = useState(false)
  const [appContent, setAppContent] = useState(null);
  const [refresh, setRefresh] = useState(true);

  useEffect (() => {
    if (refresh){
      setAppState(true);
      getFetch('animals').then(res => setAppContent(res))
      setAppState(false)
      setRefresh(false)
    }
  }, [appContent, appState, refresh])

  return (
    <div style={{margin: "40px"}}>
      <p></p>
      <LoadingList isLoading={appState} animals={appContent}/>      
      <Form setRefresh={setRefresh}/>
    </div>
  );
}

export default App;
