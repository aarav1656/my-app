import { Button, Form, Input, Radio, Space } from 'antd';
import { useState, useEffect } from 'react';
import {createGame,startBetting,endBet} from '../../Components/Web3components/web3controllers';

const Admin = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  }

  //on click for submitting form, get values from form and put here
  const submit = async (HomeTeam,AwayTeam,StartTime) => {
    await createGame("HomeTeam","AwayTeam",'0000');
  }

  //start bet , take gameID input
  const startBet = async (GameID) => {
    await startBetting(0);
  }

  //end bet , take gameid,winTeam as input
  const endBet = async (GameID,winTeam) => {
    await endBet(0);

  }

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  
  return (
    <Space
    direction="vertical"
    style={{
      width: '200%',
      margin: '100px',
    }}
  >
    <Button onClick={handleClick} type="primary" block>Create Game</Button>
    {showForm ? (
        <Form>
        <Form.Item label="Home Team">
          <Input placeholder="Home Team" />
        </Form.Item>
        <Form.Item label="Away Team">
          <Input placeholder="Away Team" />
        </Form.Item>
        <Form.Item label="Start Time">
          <Input placeholder="Start Time" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
      ) : null}
    <Button block>Start bet</Button>
    <Button type="dashed" block>
      End Bet
    </Button>
  </Space>
  );

};
export default Admin;