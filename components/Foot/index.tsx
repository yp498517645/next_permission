import { Footer } from "antd/lib/layout/layout";
import React from "react";
import styles from "./index.module.scss";
export default function Foot() {
  return (
    <>
      <Footer style={{ textAlign: "center" }} className={styles["footer"]}>
        Alonced的旅游管理后台
      </Footer>
    </>
  );
}
