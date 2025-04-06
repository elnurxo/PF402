import { useRef, useState } from "react";
import Button from "./components/button";

function App() {
  const [count, setCount] = useState<number>(0);
  const buttonRef = useRef(null);
  function handleClick(val: string) {
    console.log(val);
  }
  return (
    <>
      <Button
        handleClick={handleClick}
        variant={"danger"}
        ref={buttonRef}
        disabled
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          console.log(e.target);
        }}
      >
        <p> hover me!</p>
      </Button>
    </>
  );
}

export default App;
