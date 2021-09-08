import React from 'react';
import {shallow} from 'enzyme';
import RegistrationSection from '../components/RegistrationSection';
describe ('RegistrationSection component',()=>{
	test ('should renders  witout errors',()=>{
		const component=shallow(<RegistrationSection/>);
	}),
	test('should renders correctly',()=>{
		const component=shallow(<RegistrationSection/>);
		expect (toJson(component)).toMatchSnapshot();
	}),
	test('check for the presence of the h1 tag',()=>{
		const component=shallow(<RegistrationSection/>);
		let tegComponent=component.find('h1');
		expect (tegComponent.length).toEqual(1);
	}),
	test('tag h1 has class',()=>{
		const component=shallow(<RegistrationSection/>);
		let tegComponent=component.find('h1');
		expect(tegComponent.hasClass('registration-section__title')).toEqual(true);
	})
})