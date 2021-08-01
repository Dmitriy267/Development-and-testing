import Link from "next/link";

export default function Reservation(){
	return(
	<ul>
	<li>
<Link href="/my_profile/MyProfileApp">
<a>Вернуться на главную страницу</a>
</Link>
</li>
<li>
<Link href="../MyCars">
<a>Перейти на страницу "Мои автомобили"</a>
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