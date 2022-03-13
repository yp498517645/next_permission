import React from "react";
import Foot from "../../components/Foot";
import Head from "../../components/Head";
import Travel from "../../components/Travel";
import { Layout } from "antd";

export default function TravelPage() {
  return (
    <Layout>
      <Head></Head>
      <Travel></Travel>
      <Foot></Foot>
    </Layout>
  );
}
