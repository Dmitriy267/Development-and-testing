import ProfileContainerDirection from './ProfileContainerDirection';
import Image from 'next/image';
import lead_pencil from '../../public/images/lead-pencil.png';
import profile_contact from '../../styles/ProfileContact.module.css';
import profile_container from '../../styles/ProfileContact.module.css';
import profileContainer__columnInfo from '../../styles/ProfileContact.module.css';
import profileContainer__password from '../../styles/ProfileContact.module.css';
import profileContainer__textPassword from '../../styles/ProfileContact.module.css';
import profileContainer__btnPassword from '../../styles/ProfileContact.module.css';

export default function ProfileContact(){
	return (
	
	 <section className={profile_contact.profileContact}>
            <div className={profile_container.profileContainer}>
                <div className={profileContainer__columnInfo.profileContainer__columnInfo}>

				<ProfileContainerDirection
			   profileContainer={{
				   firstText:"Дата рождения",
				   secondText: "02.05.1977"
			   }}
			   />
                
                    <Image src={lead_pencil} alt="Иконка редактирования профиля"/>
                </div>
               <ProfileContainerDirection
			   profileContainer={{
				   firstText:"Пол",
				   secondText: "Мужской"
			   }}
			   />
                    
               
                <div className={profileContainer__columnInfo.profileContainer__columnInfo}>
				<ProfileContainerDirection
			   profileContainer={{
				   firstText:"Телефон",
				   secondText: "+7 999 123-45-67"
			   }}
			   />
            
                    <Image src={lead_pencil} alt="Иконка редактирования профиля"/>
                </div>
                <div className={profileContainer__columnInfo.profileContainer__columnInfo}>
				<ProfileContainerDirection
			   profileContainer={{
				   firstText:"Эл. почта",
				   secondText: "konstantin@mail.ru"
			   }}
			   />
                <Image src={lead_pencil} alt="Иконка редактирования профиля"/>
                </div>
                <div className={profileContainer__password.profileContainer__password}>
                <p className={profileContainer__textPassword.profileContainer__textPassword}>Пароль</p>
                <button className={profileContainer__btnPassword.profileContainer__btnPassword} >Изменить</button>
                </div>
            </div>
        </section>
	)
}