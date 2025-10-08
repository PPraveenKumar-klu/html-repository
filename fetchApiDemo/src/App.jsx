import { Axios } from "axios";
import "./App.css";
import FetchAPIExample from "./FetchAPIExample";
import "bootstrap/dist/css/bootstrap.min.css";
import AxiosAPIExample from "./AxiosAPIExample";
import AxiosUserAPI from "./AxiosUserAPI";
function App() {
  return (
    <>
      {/* <h1>Fetch API Demo</h1> */}
      {/* <FetchAPIExample /> */}
      {/* <AxiosAPIExample /> */}
      <AxiosUserAPI />
    </>
  );
}

export default App;
