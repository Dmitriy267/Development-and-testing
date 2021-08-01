import React from "react";
import Head from "next/head";
import Header from "./Header";
import  ProfileSection from "./ProfileSection";
import  ProfileContact from "./ProfileContact";
import  CritickSection from "./CritickSection";
import  Footer from "./Footer";

export default function MyProfileApp(){
	return (
	<>
	<Head>
	<title>Профиль пользователя</title>
		<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Rubik&display=swap" rel="stylesheet"/> 
	</Head>
	<Header/>
		<ProfileSection/>
		<ProfileContact/>
		<CritickSection/>
		<Footer/>
	</>
	)
}
