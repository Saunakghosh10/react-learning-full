import { useState } from "react";
import Usercontext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {children}
    </Usercontext.Provider>
  );
}

import PropTypes from "prop-types";

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
