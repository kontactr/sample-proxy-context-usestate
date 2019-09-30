import React from "react";
const UserContext = React.createContext();
export default {
  UserConsumer: UserContext.Consumer,
  UserProvider: UserContext.Provider
};
