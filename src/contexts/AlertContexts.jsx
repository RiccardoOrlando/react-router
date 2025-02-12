import { useState, useContext, createContext } from "react";

const AlertContext = createContext();

// 1. Create the Context Provider component:
function AlertProvider({ children }) {
  const [AlertData, setAlertData] = useState({
    type: "info",
    message: "",
  });

  return (
    <AlertContext.Provider value={{ AlertData, setAlertData }}>
      {children}
    </AlertContext.Provider>
  );
}

// 2. Create the custom hook to consume the context:
function useAlertContext() {
  const context = useContext(AlertContext);

  if (context === undefined) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }

  return context;
}

export { AlertProvider, useAlertContext };