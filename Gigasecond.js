export const gigasecond = (gs) => {
  return new Date(gs.getTime() + 1e+12);
};