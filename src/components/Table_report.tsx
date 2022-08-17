import React,  { useState } from 'react'
import { Divider, Radio, Table, Switch  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Switch_Table_Report from './Switch_Table_Report'
type Props = {}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}



const rowSelection = {
  
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Table_report = (props: Props) => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [bgSwitch, setBGSwitch] = useState<'bg-cyan-600' | 'bg-stone-600'>('bg-cyan-600');
  
  const onChangeSW = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    if(checked){
      setBGSwitch('bg-cyan-600')
    }else{
      setBGSwitch('bg-stone-600')
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: '#',
      dataIndex: 'name',
      // render: (text: string) => <a>{text}</a>,
      width: '20%',
    },
    {
      title: 'Location',
      dataIndex: 'age',
      width: '60%',
      // <Switch defaultChecked onChange={onChange} />
    },
    {
      title: 'Network I/O',
      // dataIndex: 'address',
      width:'10%',
      render: (text: string) => <Switch_Table_Report />,
      // render: (text: string) => <input type="checkbox" id="toggle-example-checked" className="sr-only" />
  
    },
    {
      title: 'Date',
      dataIndex: 'address',
      width:'10%'
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  return (
    <div>

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  )
}

export default Table_report