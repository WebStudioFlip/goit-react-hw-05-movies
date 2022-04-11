import { NavLink } from 'react-router-dom';
import { navLinks } from '../../shared/nav-link';
import styles from '../HeaderMenu/headerMenu.module.css';

const getLinkClassName = ({ isActive }) =>
  isActive ? styles.active : styles.link;

const HeaderMenu = () => {  
  const lis = navLinks.map(({href, name}) => (
    <li key={href}>
      <NavLink className={getLinkClassName} to={href}>
        {name}
      </NavLink>
    </li>
  ));  
  return (
    <header className={styles.nav}>
      <ul className={styles.headerMenu}>{lis}</ul>
    </header>
  );
};

export default HeaderMenu;