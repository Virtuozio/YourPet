import React from 'react';
import { Menu, NavLink } from './Nav.styled';
// import { NavLink } from 'react-router-dom';

// const items = [
//   { value: 'News', href: '/news' },
//   { value: 'Find pet', href: '/notices' },
//   { value: 'Our friends', href: '/friends' },
// ];

// export const MenuBurger = ({ header, items }) => {
//   return (
//     <ul>
//       {items.map(item => (
//         <li>
//           <a href={item.href}>{item.value}</a>
//         </li>
//       ))}
//     </ul>
//   );
// };

const Nav = () => {
  return (
    <Menu>
      <NavLink to="/news">News</NavLink>

      <NavLink to="/notices">Find pet</NavLink>

      <NavLink to="/friends">Our friends</NavLink>
    </Menu>
  );
};

export default Nav;
