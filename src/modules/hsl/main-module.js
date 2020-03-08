'use strict';

const getHsl = async () => {
    for (let i in stopId) {
      const response = await fetchData(i);
      const result = await response;
      makeArray(result);
    }
    showResult();
  };
  
  export {getHsl};