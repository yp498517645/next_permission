import { Menu, Tooltip, Avatar, Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import styles from "./index.module.scss";
import {
  MenuOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Head() {
  return (
    <Header className={styles["header"]}>
      <Tooltip placement="right" title={"Toggle Navigation"}>
        <MenuOutlined className={styles["MenuOutlined"]}></MenuOutlined>
      </Tooltip>
      <h1 className={styles["h1"]}>Alonced的后台管理网站</h1>
      <Link as='/email' href='/email'>
        <FontAwesomeIcon icon={faSquareEnvelope} className={styles["font"]} />
      </Link>
      <div className={styles["div"]}>
        <Button
          className={styles["button"]}
          type="primary"
          icon={<PoweroffOutlined />}
          ghost={true}
          // loading={loadings[2]}
          // onClick={() => this.enterLoading(2)}
        />
      </div>
    </Header>
  );
}
