import { Breadcrumb, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Side from "../Side";
import React from "react";
import styles from "./index.module.scss";

export default function Body() {
  return (
    <>
      <div className={styles['container']}>
        <Side></Side>
        <Content></Content>
      </div>
    </>
  );
}
