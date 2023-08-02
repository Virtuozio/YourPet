import React from 'react';
import { StyledLink } from './Nav.styled';
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
    <>
      <StyledLink to="/news">News</StyledLink>

      <StyledLink to="/notices/sell">Find pet</StyledLink>

      <StyledLink to="/friends">Our friends</StyledLink>
    </>
  );
};

export default Nav;
