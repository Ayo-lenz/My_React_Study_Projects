import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ErrorExample from "./useState/ErrorExample";
import FetchData from "./useEffect/fetchData";
import MultipleReturnsFetchData from "./useEffect/MultipleReturnsFetchData";
import ToggleChallenge from "./useState/ToggleChallenge";
import UserChallenge from "./useState/UserChallenge";
import ControlledInput from "./useState/ControlledInput";
import ReducerBasics from "./useRuducer/ReducerBasics";
import LowerState from "./Performance/Usecallback/LowerState";

function App() {
  return (
    <>
      <section>
        <ErrorExample />
      </section>
      <section>
        <FetchData />
      </section>
      <section>
        <MultipleReturnsFetchData />
      </section>
      <section>
        <ToggleChallenge />
      </section>
      <section>
        <UserChallenge />
      </section>
      <section style={{ marginTop: "100px" }}>
        <ControlledInput />
      </section>
      <section style={{ marginTop: "100px" }}>
        <ReducerBasics />
      </section>
      <section style={{ marginTop: "100px" }}>
        <LowerState />
      </section>
      
    </>
  );
}

export default App;
