import { Button, Form, Input, Radio, Space } from 'antd';
import { useState, useEffect } from 'react';
import {createGame,startBetting,endBet} from '../../Components/Web3components/web3controllers';

const Admin = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [HomeTeam, setHomeTeam] = useState();
  const [AwayTeam, setAwayTeam] = useState();
  const [StartTime, setStartTime] = useState();
  const [GameID, setGameID] = useState();
  const [winTeam, setwinTeam] = useState();

  const handleClick = () => {
    setShowForm(true);
  }
  const handleClick1 = () => {
    setShowForm1(true);
  }
  const handleClick2 = () => {
    setShowForm2(true);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(HomeTeam, AwayTeam, StartTime);
  };
  const handleSubmit1 = (event) => {
    event.preventDefault();
    startBet(GameID);
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
    endbet(GameID, winTeam);
  };
  //on click for submitting form, get values from form and put here
  const submit = async (HomeTeam,AwayTeam,StartTime) => {
    await createGame("HomeTeam","AwayTeam",'0000');
  }

  //start bet , take gameID input
  const startBet = async (GameID) => {
    await startBetting(0);
  }

  //end bet , take gameid,winTeam as input
  const endbet = async (GameID,winTeam) => {
    await endBet(GameID,winTeam);
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
      <div>
        <Form>
        <Form.Item label="Home Team">
          <Input placeholder="Home Team" 
          onChange={(event) => setHomeTeam(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Away Team">
          <Input placeholder="Away Team"
           onChange={(event) => setAwayTeam(event.target.value)}
           />
        </Form.Item>
        <Form.Item label="Start Time">
          <Input placeholder="Start Time" 
          onChange={(event) => setStartTime(event.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSubmit} type="primary">Submit</Button>
        </Form.Item>
      </Form>
      </div>
      ) : null}
    <Button onClick={handleClick1} block>Start bet</Button>
    {showForm1 ? (
      <div>
        <Form>
        <Form.Item label="GameID">
          <Input placeholder="ID" 
          onChange={(event) => setHomeTeam(event.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSubmit1} type="primary">Submit</Button>
        </Form.Item>
        </Form> 
      </div>
      ) : null}
    <Button onClick={handleClick2} type="dashed" block>
      End Bet
    </Button>
    {showForm2 ? (
      <div>
        <Form>
        <Form.Item label="GameID">
          <Input placeholder="ID" 
          onChange={(event) => setGameID(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="winTeam">
          <Input placeholder="win" 
          onChange={(event) => setwinTeam(event.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSubmit2} type="primary">Submit</Button>
        </Form.Item>
        </Form> 
      </div>
      ) : null}
  </Space>
  );

};
export default Admin;