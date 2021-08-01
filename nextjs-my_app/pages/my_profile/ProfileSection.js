import Image from 'next/image';
import  Photo_Ellipse from '../../public/images/Ellipse.png';
import  lead_pencil from '../../public/images/lead-pencil.png';
import   profile_section from '../../styles/ProfileSection.module.css';
import   profile_name from '../../styles/ProfileSection.module.css';
import   profileName__iconEdit from  '../../styles/ProfileSection.module.css';
import   profileSection__exitBtn from '../../styles/ProfileSection.module.css';
export default function ProfileSection(){
	return (
	<section className={profile_section.profileSection}>
        <Image src={Photo_Ellipse} alt="Фото пользователя"/>
        <div className={profile_name.profileName}>
        <h1>Константин К.</h1>
        <Image className={profileName__iconEdit.profileName__iconEdit}  src={lead_pencil} alt="Иконка редактирования профиля"/>
        </div>
        <button className={profileSection__exitBtn.profileSection__exitBtn}>Выйти из профиля</button>
    </section>

	)
}