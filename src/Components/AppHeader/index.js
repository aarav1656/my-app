import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Button, Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { Auth, useAuth } from "@arcana/auth-react";
import ProfilePage from "../../Pages/Profile"
import { useNavigate } from "react-router-dom";

function AppHeader() {
  const auth = useAuth();
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isIN, setIsIn] = useState("Sign Up");
  const navigate = useNavigate();
  
  const handleClick1 = () => {
    setIsIn("Logged in")
    navigate('/profile');
  }

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://media.licdn.com/dms/image/C4D0BAQGUECGIpf-uJQ/company-logo_200_200/0/1671645400483?e=1684972800&v=beta&t=wlVwhwQ88gXJKcPFjWBoDByu5JRHEAsFlVOQWHgi-Wk"
      ></Image>
      <Typography.Title>CasterX</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
        <Button onClick={handleClick1} type="primary">{isIN}</Button>
        {/* {showLogin ? (
        <div>
        {auth.loading ? (
          "Loading"
        ) : auth.isLoggedIn ? (
          setIsIn("lol")
        ) : (
          <div>
            <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
          </div>
        )}
      </div>
      ) : null} */}
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
