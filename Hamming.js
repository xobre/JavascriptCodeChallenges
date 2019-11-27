export const compute = (firstStrand, secondStrand, difference = 0) => {
  if (firstStrand == "" && secondStrand != "")  throw new Error('left strand must not be empty');
  else if (secondStrand == "" && firstStrand != "" ) throw new Error('right strand must not be empty');
  else if (firstStrand.length != secondStrand.length) throw new Error('left and right strands must be of equal length');
  else
    for (let i = 0; i < firstStrand.length; i++)
    {
      if (firstStrand[i] != secondStrand[i])
      {
          difference++;
      }
    }
    return difference;
  };