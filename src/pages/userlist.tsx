// import { Input, Button, Table, Modal  } from 'antd';
// import { useState } from 'react';

// const Userlist = () => {
//     const [open, setOpen] = useState(false)
//     const [currentPage, setcurrentPage] = useState(1)
//     const [pageSize, setPageSize] = useState(5)
// const dataSource = [
//   {
//     key: '1',
//     name: 'Vuong',
//     age: 'vuong@gmail.com',
//     major: 'admin',
//   },
//   {
//     key: '2',
//     name: 'Vuongg2',
//     age: 'okke@gmail.com',
//     major: 'user',
//   },
//   {
//     key: '3',
//     name: 'Vuongg2',
//     age: 'okke@gmail.com',
//     major: 'user',
//   },
//   {
//     key: '4',
//     name: 'Vuongg2',
//     age: 'okke@gmail.com',
//     major: 'user',
//   },
//   {
//     key: '5',
//     name: 'Vuongg2',
//     age: 'okke@gmail.com',
//     major: 'user',
//   },
//   {
//     key: '6',
//     name: 'Vuongg2',
//     age: 'okke@gmail.com',
//     major: 'user',
//   },
//   {
//     key: '7',
//     name: 'Vuongg2',
//     age: 'okke@gmail.com',
//     major: 'user',
//   },
//   {
//     key: '8',
//     name: 'Vuongg2',
//     age: 'okke@gmail.com',
//     major: 'user',
//   },
//   {
//     key: '9',
//     name: 'Vuongg2',
//     age: 'okke@gmail.com',
//     major: 'user',
//   },
//   {
//     key: '10',
//     name: 'Vuongg2',
//     age: 'okke@gmail.com',
//     major: 'user',
//   },
// ];

// const columns = [
//   {
//     title: 'STT',
//     key: 'index',
//     render: (_: any, __: any, index: number) => (currentPage - 1) * pageSize + index + 1,
//   },
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Major',
//     dataIndex: 'major',
//     key: 'major',
//     render: (text: string) => {
//         if(text === "admin"){
//             return <span style={{color: "red", fontWeight: "bold"}}>{text}</span>
//         }
//         if(text === "user"){
//             return <span style={{color: "green", fontWeight: "bold"}}>{text}</span>
//         }
//     }
//   },
// ];

//     return (
//         <>
//         <Table dataSource={dataSource} columns={columns} pagination= {{
//             current: currentPage,
//             pageSize: pageSize,

//             onChange: (page, size) => {
//             setcurrentPage(page)  
//             setPageSize(size)
//             }
//         }}
//         />
//         <Button type="primary" onClick={() => setOpen(true)}>
//         Open Modal
//       </Button>
//       <Modal
//         title="Basic Modal"
//         closable={{ 'aria-label': 'Custom Close Button' }}
//         open={open}
//         onOk={() => setOpen(false)}
//         onCancel={() => setOpen(false)}
//       >
//         <Input placeholder="Basic usage" />
//                     <Input placeholder="Basic usage" />
//                     <Button type='default'>Submit</Button>

//       </Modal>
//         </>
//     )
// }
// export default Userlist;