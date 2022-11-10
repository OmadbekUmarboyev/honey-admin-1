export const reLoading = (state = false, action) => {
  switch (action.type) {
    case "LOADING":
      return action.paylod;
    default:
      return state;
  }
};

export const acLoading = (paylod) => {
  return {
    type: "LOADING",
    paylod,
  };
};
