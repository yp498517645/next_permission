import { Avatar, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import styles from "./index.module.scss";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";

export default function Side() {
  return (
    <Menu
      //onClick={this.handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      mode="inline"
      className={styles['menu']}
    >
      <div className={styles.container}>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
          className={styles["avatar"]}
          src="images/background.png"
        />
      </div>
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        账号管理
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
