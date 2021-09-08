import React, {Component} from "react";
import "../styles/RegistrationFooter.css";

class RegistrationFooter extends Component{
	constructor(props){
		super(props);
		this.state={clicks:true};
		this.handeClickButton=this.handeClickButton.bind(this);
	}
	handeClickButton(){
		this.setState(prevState=>({
			clicks: !prevState.clicks
		}));
	}
	render(){
return (
     <footer className="page-registration-footer">
            <button className="btn-resume" onClick={this.handeClickButton}>
			{this.state.clicks ? 'Продолжить' : 'Проверка данных'}
			</button>
        </footer>
);
}
}
export default RegistrationFooter;