import React, { createContext, useState } from 'react';

// Create a context with default values
export const likeContext = createContext({
  userId: null,
  itemId: null,
  setUserId: () => {},
  setItemId: () => {},
});

// Create a Context Provider component
export const likeContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [itemId, setItemId] = useState(null);

  return (
    <YourContext.Provider value={{ userId, itemId, setUserId, setItemId }}>
      {children}
    </YourContext.Provider>
  );
};
