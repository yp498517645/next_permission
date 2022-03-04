import styles from "./index.module.scss";
import type { NextPage } from "next";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { User } from "../api/user";
import { useRouter } from "next/router";
const user = new User();

export interface registerType {
  username: string;
  password: string;
  isAdmin: boolean;
}

const Login: NextPage = () => {
  const router = useRouter();

  //提交表单且数据验证成功后回调事件;
  const onFinish = (values: registerType) => {
    const res: Promise<any> = user.usrRegister(
      values.username,
      values.password
    );
    console.log(res)
    res.then((result) => {
      if (result.data.message === "用户注册成功") {
        router.push("/login");
      } else {
        alert("注册失败");
      }
    });
  };
  //提交表单且数据验证失败后回调事件
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
          labelCol={{ offset: 3 }}
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
          className={styles.repassword}
          labelCol={{ offset: 2 }}
          label="确认密码"
          name="repassword"
          rules={[
            {
              required: true,
              message: "请确认你的密码是否一致！",
            },
            ({ getFieldValue }) => ({
              //validator 自定义校验 (rule, value) => Promise
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次密码输入不一致!"));
              },
            }),
          ]}
        >
          <Input.Password className={styles["repwd"]} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{marginLeft:"3rem"}}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
