import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calVal); // You can replace eval with a safer evaluator later
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
