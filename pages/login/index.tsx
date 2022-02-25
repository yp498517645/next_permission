import styles from "./index.module.scss";
import type { NextPage } from "next";
import { Form, Input, Button, Checkbox } from "antd";
import { User } from "../api/user";
import { useRouter } from "next/router";
const user = new User();

interface loginType {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();

  const onRegister = () => {
    router.push("/register");
  };
  async function onFinish(values: loginType) {
    try {
      const res = await user.usrLogin(values.username, values.password);
      if (res?.data.message === "用户登陆成功") {
        localStorage.setItem(values.username, res.data.result.token);
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          <Input.Password className={styles["inputPw11d"]} />
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
          <Button
            type="primary"
            htmlType="button"
            style={{ marginLeft: "1rem" }}
            onClick={onRegister}
          >
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
