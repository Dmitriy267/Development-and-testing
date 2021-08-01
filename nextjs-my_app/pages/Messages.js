import Link from "next/link";

export default function Messages(){
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
</ul>
)
}