module.exports = function getZerosCount(number, base) {

  let i = 0, count = 0, div = 2, zerosCount = 0;
  let isMutiplierExist = false ;
  let multipliers = [], entriesInBase = [], entriesInNumber = [];
  
  do {
    if (base % div === 0) {
      base = base / div;
      count++;
      isMutiplierExist = true;
    } else {

        if (isMutiplierExist) {
          multipliers[i] = div;
          entriesInBase[i] = count;
          i++;
        }        
        div++;
        count = 0;
        isMutiplierExist = false;
    }
  } while (div <= base);
  multipliers[i] = div;
  entriesInBase[i] = count;

  for (i = 0; i < multipliers.length; ++i) {
    div = 1;
    entriesInNumber[i] = 0;
    while (div <= number) {
      div = div * multipliers[i];
      entriesInNumber[i] += Math.floor(number / div);
    }
  }

  let a = Math.floor(entriesInNumber[0] / entriesInBase[0]), b;
  for (i = 0; i < entriesInBase.length; ++i) {
    b = Math.floor(entriesInNumber[i] / entriesInBase[i]);
    zerosCount = Math.min(a,b);
  }

  return zerosCount;

}



  

