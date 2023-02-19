import { Button, Form, Input, Radio, Space } from 'antd';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const Admin = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  }
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const deploy = async () => {
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/e07f5b7257b24b939902f5427f9e5593");
    const signer = new ethers.Wallet("1156880db2768fe49431d238890240799814e3f27a007aab81c19c69b369fb81", provider);

    const abiFile = "%PUBLIC_URL%/split.abiFile"
    const bytecodeFile = "%PUBLIC_URL%/distribute.bytecodeFile"

    const abiReader = new FileReader();
    abiReader.readAsText(abiFile);
    const abiText = await new Promise(resolve => {
      abiReader.onload = () => resolve(abiReader.result);
    });
    const contractAbi = JSON.parse(abiText);

    const bytecodeReader = new FileReader();
    bytecodeReader.readAsText(bytecodeFile);
    const bytecodeText = await new Promise(resolve => {
      bytecodeReader.onload = () => resolve(bytecodeReader.result);
    });
    const contractBytecode = bytecodeText.trim();

    const contractFactory = new ethers.ContractFactory(contractAbi, contractBytecode, signer);

    const payees = ["0x090E217C131a4d4Ae39B55839FD7Dc5b5863d9a4", "0x4F02422b3de69ae27AEdc5219450926A179908C0"];
    const shares = [1, 2];

    const deployedContract = await contractFactory.deploy(payees, shares);
    console.log("Contract deployed at address:", deployedContract.address);
      }

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
      ) : null}
    <Button block>Start bet</Button>
    <Button type="dashed" block>
      End Bet
    </Button>
    <Button onClick={deploy}>Deploy</Button>
  </Space>
  );

};
export default Admin;