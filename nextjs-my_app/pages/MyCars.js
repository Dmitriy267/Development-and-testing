import Link from "next/link";

export default function MyCars(){
	return(
	<ul>
	<li>
<Link href="/my_profile/MyProfileApp">
<a>Вернуться на главную страницу</a>
</Link>
</li>
<li>
<Link href="../Messages">
<a>Перейти на страницу "Сообщения"</a>
</Link>
</li>
</ul>
)
}