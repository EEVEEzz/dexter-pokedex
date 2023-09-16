import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set an alert
  const setAlert = (message, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { message, type },
    });

    // after 3 seconds remove the alert
    setTimeout(() => {
      dispatch({
        type: "REMOVE_ALERT",
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
