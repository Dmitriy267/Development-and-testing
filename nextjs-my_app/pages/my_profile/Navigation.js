import Image from 'next/image';
import  Photo_little from '../../public/images/photo_m.png';
import  navigation from '../../styles/Navigation.module.css';
import Link from 'next/link';
export default function Navigation(){
	return (
	<div className={navigation.navigation}>
	<style jsx>{`
	nav{
    display: flex;
    width: 463px;
    justify-content: space-between;
}
nav ul {
  list-style-type: none;
  display: flex;
  margin-top: 35px;
    padding: 0px;
    justify-content: space-between;
    width: 385px;
  }

nav li {
  display: flex; }

nav a {
  font-size: 16px;
  font-weight: normal;
  color: #1B1B1B;
  cursor: pointer;
  text-decoration: none; }
  nav a:hover {
    color: #00CC00; }
		 `}
		 </style>
             <nav>
                 <ul aria-label="Основные разделы профиля">
                     <li>
					 <Link href='../Reservation'>
					 <a>Бронирования</a>
					 </Link>
					 </li>
                     <li>
					 <Link href='../MyCars'>
					 <a>Мои автомобили</a>
					 </Link>
					 </li>
                     <li>
					 <Link href='../Messages'>
					 <a>Сообщения</a>
					 </Link>
					 </li>
                    
                 </ul>
                 <Image src={Photo_little}  alt="Фото пользователя"/>
             </nav>
            
             </div>
	)
}