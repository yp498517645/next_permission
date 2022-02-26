import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

export default function Side() {
  return (
    <Menu
      //onClick={this.handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Option 1
      </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Option 2
      </Menu.Item>
      <Menu.Item key="3" icon={<ContainerOutlined />}>
        Option 3
      </Menu.Item>
    </Menu>
  );
}
