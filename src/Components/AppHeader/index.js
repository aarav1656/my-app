import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Button, Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { Auth, useAuth } from "@arcana/auth-react";

function AppHeader() {
  const auth = useAuth();
  const onLogin = () => {
    // Route to authenticated page
  }
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isIN, setIsIn] = useState("Sign Up");

  const handleClick1 = () => {
    setShowLogin(true);
  }

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src=""
      ></Image>
      <Typography.Title>CasterX</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
        <Button onClick={handleClick1} type="primary">{isIN}</Button>
        {showLogin ? (
        <div>
        {auth.loading ? (
          "Loading"
        ) : auth.isLoggedIn ? (
          <p1>Logged in</p1>
        ) : (
          <div>
            <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
          </div>
        )}
      </div>
      ) : null}
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
export default AppHeader;
