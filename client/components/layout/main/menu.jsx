import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'antd';
import pathToRegexp from 'path-to-regexp';

const { SubMenu } = Menu;

export const config = [
  // {
  //   name: 'Dashboard',
  //   icon: 'laptop',
  //   route: '/dashboard',
  // },
  // {
  //   name: 'GST',
  //   icon: 'user',
  //   route: '/gst',
  // },
  // {
  //   name: 'Posts',
  //   icon: 'shopping-cart',
  //   route: '/post',
  // },
  {
    name: '固生堂信息集',
    icon: 'code-o',
    items: [
      {
        name: '用户信息',
        icon: 'user',
        route: '/gst',
      },
      {
        name: '协定配方',
        icon: 'bar-chart',
        route: '/recipetemplate',
      },
      {
        name: 'Recharts',
        icon: 'area-chart',
        route: '/recharts',
      },
    ],
  },
];

const Menus = ({ className, theme, siderFolded, location }) => {
  let selected = 'gst';
  const mapItems = items =>
    items.map((item) => {
      if (
        item &&
        item.route &&
        pathToRegexp(item.route).exec(location.pathname)
      ) {
        selected = item.name;
      }
      if (item && item.items) {
        return (
          <SubMenu
            key={item.name}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </span>
            }
          >
            {mapItems(item.items)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.name}>
          <Link to={item.route}>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      );
    });

  const menus = mapItems(config);
  return (
    <Menu
      className={className}
      defaultSelectedKeys={[selected]}
      defaultOpenKeys={['Charts']}
      mode="inline"
      theme={theme}
      inlineCollapsed={siderFolded}
    >
      {menus}
    </Menu>
  );
};

Menus.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  siderFolded: PropTypes.bool,
};

export default Menus;
