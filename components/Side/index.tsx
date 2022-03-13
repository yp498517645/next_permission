import { Avatar, Menu } from "antd";
import React from "react";
import styles from "./index.module.scss";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function Side() {
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      mode="inline"
      className={styles["menu"]}
    >
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        <Link href="/home">账号管理</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<PieChartOutlined />}>
        <Link href="/travel">旅游管理</Link>
      </Menu.Item>
    </Menu>
  );
}
