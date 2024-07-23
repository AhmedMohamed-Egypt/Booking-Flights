import { createContext, useContext, useReducer } from "react";

const FlightContext = createContext();
const initialFlightsData = {
  flightMode: "single way",
};

function reducer(snState, action) {
  switch (action.payload) {
    case "": {
      return { ...snState };
    }

    default: {
      throw new Error("Action not known");
    }
  }
}

function FlightProvider({ children }) {
  const [{ flightMode }, dispatch] = useReducer(reducer, initialFlightsData);

  return <FlightContext.Provider value={{flightMode}}>{children}</FlightContext.Provider>;
}

function UseFligtsContext() {
  const context = useContext(FlightContext);
  if (context == undefined) {
    throw new Error("Context is used outside");
  }

  return context;
}

export { FlightProvider, UseFligtsContext };
