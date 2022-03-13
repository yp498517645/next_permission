import {
  Breadcrumb,
  Card,
  Divider,
  Layout,
  Menu,
  message,
  Popconfirm,
  Space,
  Switch,
  Image,
  Table,
  Tag,
} from "antd";
import { Content } from "antd/lib/layout/layout";
import Side from "../Side";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Column from "antd/lib/table/Column";
import { Info } from "../../pages/api/info";
interface getData {
  id: number;
  title: string;
  price: string;
  url: string;
}
export default function Travel() {
  const [data, setdata] = useState<getData[]>([]);
  const tableWrapperRef = useRef(null);
  let height: number;
  if (tableWrapperRef.current) {
    height = tableWrapperRef.current!["clientHeight"];
  } else {
    height = 350;
  }

  const [scrollY, setscrollY] = useState(height as number);
  interface InfoType {
    id: number;
    title: string;
    price: string;
    touristRoutePictures: [{ url: string }];
  }

  const formatData = (arr: [InfoType]): getData[] => {
    return arr.map((item) => {
      let url = item.touristRoutePictures[0].url;
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        url: url,
      };
    });
  };

  useEffect(() => {
    let isUnmount = false;
    const fetch = async () => {
      const result = await new Info().findAllInfo();
      let data = result?.data.result.data;

      if (!isUnmount) {
        setdata(formatData(data));
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
                <Column title="标题" dataIndex="title" />
                <Column title="价格" dataIndex="price" />
                <Column
                  title="地址"
                  dataIndex="url"
                  render={(text: string, record: any) => {
                    return <Image src={text} />;
                  }}
                />
              </Table>
            </Card>
          </div>
        </Content>
      </div>
    </>
  );
}
