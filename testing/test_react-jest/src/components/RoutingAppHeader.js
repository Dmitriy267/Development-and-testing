import {Link} from 'react-router-dom';
import React from 'react'
const RoutingAppHeader=()=>(
<div>
<nav>
<ul>
<li><Link to='/'>Домой</Link></li>
<li><Link to='/pageregistration'>Страница регистрации</Link></li>
<li><Link to='/registration'>Условия</Link></li>
<li><Link to='/qustions'>Частые вопросы</Link></li>
<li><Link to='/about'>О нас</Link></li>
<li><Link to='/avtorisation'>Страница авторизации</Link></li>
<li><Link to='/recovery'>Страница восстановления пароля</Link></li>
</ul>
</nav>
</div>
)
export default RoutingAppHeader;