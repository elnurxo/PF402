import Counter from "./components/Counter";
import Decrement from "./components/Decrement";
import DecrementByAmount from "./components/DecrementByAmount";
import Increment from "./components/Increment";
import IncrementByAmount from "./components/IncrementByAmount";
import Reset from "./components/Reset";

function App() {
  return (
    <>
      <h1>Counter with Redux toolkit</h1>
      <div>
        <Increment />
        <Counter />
        <Decrement />
        <Reset />
        <hr />
        <IncrementByAmount amount={5} />
        <DecrementByAmount amount={5} />
      </div>
    </>
  );
}

export default App;
