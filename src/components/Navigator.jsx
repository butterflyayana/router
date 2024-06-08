import { NavLink } from "react-router-dom"
import cls from "./nav.module.css"


const Navigator = () => {
  return (
    <div className={cls.nav}>
         <nav>
          <ul>
            <li>
              <NavLink to="/"  style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none',color: "black" })} >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"  style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',textDecoration: 'none', color: "black" })}>
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',textDecoration: 'none',color: "black" })}>
                Контакты
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',textDecoration: 'none', color: "black" })} >
                Продукт
              </NavLink>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navigator