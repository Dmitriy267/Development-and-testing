import React from 'react';
import QuestionApp from '../components/QuestionApp';
import {shallow} from 'enzyme';;
describe('QuestionApp component',()=>{
 
    test ('should renders QuestionApp witout errors',()=>{
        shallow(<QuestionApp/>);
    });
        
})
