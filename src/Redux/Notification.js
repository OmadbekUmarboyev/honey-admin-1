export const reNotification = (state = false, action) => {
  switch (action.type) {
    case "NOTIFICATION":
      return action.payload;
    default:
      return state;
  }
};

export const acNotification = (payload) => {
  return {
    type: "NOTIFICATION",
    payload,
  };
};
