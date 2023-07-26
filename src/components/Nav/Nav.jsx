import React from 'react';
import { Menu, Link } from './Nav.styled';
// import { Link } from 'react-router-dom';

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
      <Link href="/news">News</Link>

      <Link href="/notices">Find pet</Link>

      <Link href="/friends">Our friends</Link>
    </Menu>
  );
};

export default Nav;
