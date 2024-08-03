import React from "react";
import registerStore from "./register_store";

const storeContext = React.createContext({
  registerStore
});

export default storeContext;