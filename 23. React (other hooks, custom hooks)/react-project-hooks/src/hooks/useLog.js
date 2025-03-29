import { useEffect } from "react";

export function useLog(message) {
  useEffect(() => {
    console.log(message);

    //cleanup - unmount
    // return () => {
    //   console.log(`Cleanup: ${message}`);
    // };
  }, [message]);
}
