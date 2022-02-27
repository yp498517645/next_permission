import { Breadcrumb, Card, Layout, Menu, Space, Table, Tag } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Side from "../Side";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Column from "antd/lib/table/Column";
import { User } from "../../pages/api/user";
import { CopyrightCircleFilled } from "@ant-design/icons";
export default function Body() {
  const [data, setdata] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    const fetch = async () => {
      const reuslt = await new User().findAllUsers();
      setdata(reuslt?.data.data);
    };
    fetch();
    return () => {};
  }, []);
  console.log(data[0]);
  return (
    <>
      <div className={styles["container"]}>
        <Side></Side>
        <Content className={styles["middle-container"]}>
          <div>
            <Card
              title="管理展示页"
              bordered={false}
              style={{ width: "100%", height: "90vh" }}
            >
              <Table
                dataSource={data}
                pagination={{ pageSize: 12 }}
                rowKey="_id"
              >
                <Column title="用户名" dataIndex="username" />
                <Column title="密码" dataIndex="password" />
                <Column title="isAdmin" dataIndex="isAdmin" />
                <Column title="Address" dataIndex="address" />
                <Column
                  title="Action"
                  render={(text, record: any) => (
                    <Space size="middle">
                      <a>Admin</a>
                      <a>Delete</a>
                    </Space>
                  )}
                />
              </Table>
            </Card>
          </div>
        </Content>
      </div>
    </>
  );
}
