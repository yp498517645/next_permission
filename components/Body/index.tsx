import {
  Breadcrumb,
  Card,
  Layout,
  Menu,
  message,
  Popconfirm,
  Space,
  Switch,
  Table,
  Tag,
} from "antd";
import { Content } from "antd/lib/layout/layout";
import Side from "../Side";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Column from "antd/lib/table/Column";
import { User } from "../../pages/api/user";

export default function Body() {
  const [data, setdata] = useState([]);
  const [flag, setflag] = useState(false);
  const tableWrapperRef = useRef(null);
  let height: number;
  if (tableWrapperRef.current) {
    height = tableWrapperRef.current!["clientHeight"];
  } else {
    height = 350;
  }

  const [scrollY, setscrollY] = useState(height as number);

  useEffect(() => {
    let isUnmount = false;
    const fetch = async () => {
      const reuslt = await new User().findAllUsers();
      if (!isUnmount) {
        setdata(reuslt?.data.data);
      }
    };
    fetch();
    return () => {
      isUnmount = true;
    };
  }, []);

  useEffect(() => {
    const a = document.body.clientHeight / height;

    if (tableWrapperRef.current) {
      window.onresize = () => {
        const nextScrolly = document.body.clientHeight / a;
        setscrollY((pre: number) => {
          if (Math.abs(pre - nextScrolly) > 5) {
            return nextScrolly;
          } else {
            return pre;
          }
        });
      };
    }
  }, [height]);
  //删除确认
  const confirm =  async (record: any) => {
    await new User().deleteOneUser(record.username);
    const result = await new User().findAllUsers();
    setdata(result.data.data);
    message.success("delete on yes");
  };

  //删除取消
  const cancel = (e: any) => {
    message.error("delete on no");
  };

  //开关
  function onChange(checked: any) {
    console.log(`switch to ${checked}`);
  }

  return (
    <>
      <div className={styles["container"]}>
        <Side></Side>
        <Content className={styles["middle-container"]}>
          <div ref={tableWrapperRef}>
            <Card title="管理展示页" bordered={false} style={{ width: "100%" }}>
              <Table
                dataSource={data}
                pagination={{ pageSize: 10 }}
                scroll={{ y: scrollY }}
                rowKey="_id"
              >
                <Column title="用户名" dataIndex="username" />
                <Column title="密码" dataIndex="password" />
                <Column title="Address" dataIndex="address" />
                <Column
                  title="Action"
                  render={(text, record: any) => (
                    <Popconfirm
                      title="Are you sure to delete this admin?"
                      onConfirm={() => {
                        confirm(record);
                      }}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <a href="#">Delete</a>
                    </Popconfirm>
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
