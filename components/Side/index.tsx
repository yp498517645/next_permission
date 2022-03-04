import { Avatar, Menu } from "antd";
import React from "react";
import styles from "./index.module.scss";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

export default function Side() {
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      mode="inline"
      className={styles['menu']}
    >
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        账号管理
      </Menu.Item>
    </Menu>
  );
}
