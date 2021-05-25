import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'


const FilterDropdown = () => {
    
    function handleButtonClick(e) {
      message.info('Click on right button.');
      console.log('click left button', e);
    }
    
    function handleMenuClick(e) {
      message.info('Click on menu item.');
      console.log('click', e);
    }
    
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Hero
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
         Villain
        </Menu.Item>

      </Menu>
    );


    return (
        
    <Space wrap>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Filter
      </Dropdown.Button>
    </Space>
    )
}



export default FilterDropdown