import { Menu, Tooltip, Avatar, Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import styles from "./index.module.scss";
import { MenuOutlined, PoweroffOutlined } from "@ant-design/icons";
import Link from "next/link";
import SquareEnvelope from "./SquareEnvelope";
import { useRouter } from "next/router";

export default function Head() {
  const router = useRouter();
  const quitLogin =() => { 
    localStorage.removeItem("token");
    router.push("/login");

   }
  return (
    <Header className={styles["header"]}>
      <Tooltip placement="right" title={"Toggle Navigation"}>
        <MenuOutlined className={styles["MenuOutlined"]}></MenuOutlined>
      </Tooltip>
      <h1 className={styles["h1"]}>Alonced的后台管理网站</h1>
      <Link as="/email" href="/email" passHref>
        <SquareEnvelope></SquareEnvelope>
      </Link>
      <div className={styles["div"]}>
        <Button
          className={styles["button"]}
          type="primary"
          icon={<PoweroffOutlined />}
          ghost={true}
          // loading={loadings[2]}
          onClick={quitLogin}
        />
      </div>
    </Header>
  );
}
