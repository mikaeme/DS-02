'use strict';
import {fetchData} from './fetch-module';
import {showResult} from './show-module';
import { stopId } from './fetch-module';

const getHsl = async () => {
    for (let i in stopId) {
      const response = await fetchData(i);
      const result = await response;
    }
    showResult();
  };
  
  export {getHsl};