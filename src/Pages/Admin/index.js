import { Button, Form, Input, Radio, Space } from 'antd';
import { useState } from 'react';
const Admin = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const Change1 = ()=> {
    return(
      <Form>
      <Form.Item label="Home Team">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Away Team">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Start Time">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
    )
  }

  return (
    <Space
    direction="vertical"
    style={{
      width: '200%',
      margin: '100px',
    }}
  >
    <Button onClick={Change1} type="primary" block>
      Create Game
    </Button>
    <Button block>Start bet</Button>
    <Button type="dashed" block>
      End Bet
    </Button>
    <Change1 />
  </Space>
  );

};
export default Admin;