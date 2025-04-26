import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttons = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((buttonName) => {
        return (
          <button
            key={buttonName}
            className={styles.button}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsContainer;
