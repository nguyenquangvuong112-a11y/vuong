import { Input, Button, Table, Modal  } from 'antd';
import { useState } from 'react';

const Userlist = () => {
    const [open, setOpen] = useState(false)
const dataSource = [
  {
    key: '1',
    name: 'Vuong',
    email: 'vuong@gmail.com',
    role: 'admin',
  },
  {
    key: '2',
    name: 'Vuongg2',
    email: 'okke@gmail.com',
    role: 'user',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'role',
    dataIndex: 'role',
    key: 'role',
  },
];

    return (
        <>
        <Table dataSource={dataSource} columns={columns} />
        <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <Input placeholder="Basic usage" />
                    <Input placeholder="Basic usage" />
                    <Button type='default'>Submit</Button>

      </Modal>
        </>
    )
}
export default Userlist;