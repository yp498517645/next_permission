import styles from "./index.module.scss";
import type { NextPage } from "next";
import { Form, Input, Button, Checkbox } from "antd";

const Login: NextPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles["container"]}>
      <Form
        className={styles["form"]}
        name="basic"
        /* label所占的百分比 */
        labelCol={{ span: 6 }}
        /* label后面的所占的百分比 */
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        /*         onFinish={onFinish}
        onFinishFailed={onFinishFailed} */
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入你的用户名!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className={styles.formItem}
          labelCol={{ offset: 3 }}
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入你的密码!" }]}
        >
          <Input.Password className={styles["inputPwd"]} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 4, span: 16 }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
          <Button type="primary" htmlType="submit" style={{marginLeft:'1rem'}}>
            注册
          </Button>
        </Form.Item>
      
      </Form>
    </div>
  );
};
export default Login;
