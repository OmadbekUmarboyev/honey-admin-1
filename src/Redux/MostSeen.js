export const reMostSeen = (state = [], action) => {
  switch (action.type) {
    case "MOSTSEEN":
      return action.payload;
    default:
      return state;
  }
};

export const acMostSeen = (arr) => {
  return {
    type: "MOSTSEEN",
    payload: arr,
  };
};
