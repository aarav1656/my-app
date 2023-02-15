import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Button, Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import Arcana from "../arcana";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src=""
      ></Image>
      <Typography.Title>CasterX</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
        <Button type="primary">Sign up</Button>
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
