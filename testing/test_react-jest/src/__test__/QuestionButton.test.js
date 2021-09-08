
import QuestionApp from '../components/QuestionApp';
import {shallow} from 'enzyme';;
describe('QuestionButton component',()=>{
 
    test ('should renders button is not disabled',()=>{
        
            const {queryByTestId}=render(`
 <button  type="button" className={props.contact.btn_num} aria-label="Кнопка с вопросом"><img src={chevron_down} alt="Показать ответ" />
        <img src={chevron_up} alt="Скрыть ответ" className={props.contact.offIcons}/>
        {props.contact.btn_name}</button>
            `);
            expect(()=>{
               expect(queryByTestId('button')).toBeEnaBled()  
            }).toThrowError()
            
        });
        
})
