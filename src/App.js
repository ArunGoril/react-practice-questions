import "./App.css";
// import CounterUsingHOC from './components/questions/1 - higher order component/CounterUsingHOC';
// import CounterUsingCustomHook from './components/questions/2 - custom hooks/CounterUsingCustomHook';
// import UseMemo from './components/questions/3 - use memo/UseMemo';
// import UseCallback from './components/questions/4 - use callback/UseCallback';
// import BuggyComponent from "./components/questions/5 - error boundary/BuggyComponent";
// import ErrorBoundary from "./components/questions/5 - error boundary/ErrorBoundary";
// import UseReducer from "./components/questions/6 - use reducer/UseReducer";
// import UseContext from "./components/questions/7 - use context api/UseContext";
import LazyLoading from "./components/questions/8 - lazy loading/LazyLoading";

function App() {
  return (
    <div className="App">
      {/* <CounterUsingHOC /> */}
      {/* <CounterUsingCustomHook /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary> */}
      {/* <UseReducer /> */}
      {/* <UseContext /> */}
      <LazyLoading />
    </div>
  );
}

export default App;
