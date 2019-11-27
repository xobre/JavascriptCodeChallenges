const COLORS =[
"black",
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white"]

export const value = ([x,y]) => {
  let output = (COLORS.indexOf(x)*10 + COLORS.indexOf(y));
  return output;
}