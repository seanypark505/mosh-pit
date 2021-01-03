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
      <Menu.Item header>Trippy</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="account"
          active={activeItem === 'account'}
          onClick={handleItemClick}
        >
          Account
        </Menu.Item>
        <Menu.Item
          name="log-in"
          active={activeItem === 'log-in'}
          onClick={handleItemClick}
        >
          Log In
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
