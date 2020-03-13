'use strict';
import {finnish} from './admin'; 

// change title and legend languages
const changeLanguage = () =>{
    if(finnish) {
        document.querySelector('#lunch-title').innerHTML = ('Lounaslista');
        document.querySelector('.dest').innerHTML = ('MÄÄRÄNPÄÄ');
        document.querySelector('.stop').innerHTML = ('PYSÄKKI');
    } else {
        document.querySelector('#lunch-title').innerHTML = ('Lunch menu');
        document.querySelector('.dest').innerHTML = ('DESTINATION');
        document.querySelector('.stop').innerHTML = ('STOP'); 
    }
};

export { changeLanguage};