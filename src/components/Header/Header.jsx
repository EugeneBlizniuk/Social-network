import React from "react";
import style from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://wallpapercave.com/wp/ahIT9QM.jpg"/>

      <div className={style.loginBlock}>
        {props.isAuthenticated
          ? <div> {props.login} <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
