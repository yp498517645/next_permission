import { Menu, Tooltip, Avatar } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import styles from "./index.module.scss";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Head() {
  return (
    <Header className={styles["header"]}>
      <Tooltip placement="right" title={"Toggle Navigation"}>
        <MenuOutlined className={styles["MenuOutlined"]}></MenuOutlined>
      </Tooltip>
      <h1 className={styles["h1"]}>Alonced的后台管理网站</h1>
      <FontAwesomeIcon icon={faSquareEnvelope} className={styles["font"]} />
      <div className={styles["div"]}>
        <Avatar
          className={styles["avatar"]}
          shape="square"
          size="large"
          icon={<UserOutlined />}
        />
      </div>
    </Header>
  );
}
