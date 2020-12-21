import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

function Header() {
  const [{ activeItem }, setActive] = useState({ activeItem: 'home' });

  function handleItemClick(e, { name }) {
    const newActiveItem = { name };
    setActive({ activeItem: newActiveItem.name });
  }

  return (
    <Menu pointing secondary size="large">
      <Menu.Item header>Mosh Pit</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="search"
          active={activeItem === 'search'}
          onClick={handleItemClick}
        >
          Search
        </Menu.Item>
        <Menu.Item
          name="sign-in"
          active={activeItem === 'sign-in'}
          onClick={handleItemClick}
        >
          Sign In
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
