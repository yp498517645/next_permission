import React from "react";
import Body from "../../components/Body";
import Foot from "../../components/Foot";
import Head from "../../components/Head";
import { Layout, Menu } from "antd";


export default function Home() {
  return (
    <Layout>
      <Head></Head>
      <Body></Body>
      <Foot></Foot>
    </Layout>
  );
}
