export const reAppbar = (state = false, action) => {
  switch (action.type) {
    case "APPBAR":
      return action.payload;
    default:
      return state;
  }
};

export const acAppbar = (payload) => {
  return {
    type: "APPBAR",
    payload,
  };
};
