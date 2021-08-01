import Image from 'next/image';
import Photo_critick from '../../public/images/photo_critick.png';
import critickBlock__dataName from '../../styles/CritickSection.module.css';
import  critickSection from '../../styles/CritickSection.module.css';
import  critickBlock from '../../styles/CritickSection.module.css';
import  critickBlock__dataName_boldText from '../../styles/CritickSection.module.css';
import  critickBlock__dataName_littleText from '../../styles/CritickSection.module.css';
import  critickSection__comment from '../../styles/CritickSection.module.css';


export default function CritickSection(){
	return (
	<section className={critickSection.critickSection}>
        <h1>Отзывы о вас</h1>
        <div className={critickBlock}>
        <Image src={Photo_critick} alt="Фотография критика"/>
            <div className={critickBlock__dataName.critickBlock__dataName}>
        <p className={critickBlock__dataName_boldText.critickBlock__dataName_boldText}>Владимир И.</p>
        <p className={critickBlock__dataName_littleText.critickBlock__dataName_littleText}>Март 2020</p>
            </div>
        </div>
        <p className={critickSection__comment.critickSection__comment}>Аккуратный водитель, автомобиль вернул чистым и заправленным. Рекомендую Константина как арендатора!</p>
        </section>

	)
}