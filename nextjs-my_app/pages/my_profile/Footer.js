import Image from 'next/image';
import icon_vk from '../../public/images/icon-vk.png';
import icon_inst from '../../public/images/icon-inst.png';
import  icon_fb from '../../public/images/icon-fb.png';
import  footer_style from '../../styles/Footer.module.css';
import  footer_icons from '../../styles/Footer.module.css';
import   footer_section from '../../styles/Footer.module.css';
export default function Footer(){
	return (
	
	<footer className={footer_section.footerSection}>
             <div className={footer_style.footer}>
            <p lang="en">&#169; SkillDrive Inc. 2020</p>
            <div className={footer_icons.footerIcons}>
                <a href="#"><Image src={icon_vk} alt="Иконка ВКонтакте"/></a>
                <a href="#"><Image src={icon_inst} alt="Иконка Инстаграм"/></a>
                <a href="#"><Image src={icon_fb} alt="Иконка Фейсбук"/></a>
            </div>
            </div>
        </footer>

	)
}