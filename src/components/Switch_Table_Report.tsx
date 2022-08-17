import React, { useState } from 'react'
import { Switch  } from 'antd';
type Props = {}

const Switch_Table_Report = (props: Props) => {
    const [bgSwitch, setBGSwitch] = useState<'bg-cyan-600' | 'bg-stone-600'>('bg-cyan-600');
  
  const onChangeSW = (checked: boolean) => {
    // console.log(`switch to ${checked}`);
    if(checked){
      setBGSwitch('bg-cyan-600')
    }else{
      setBGSwitch('bg-stone-600')
    }
  };

  return (
    <Switch defaultChecked onChange={onChangeSW} className={bgSwitch}/>
  )
}

export default Switch_Table_Report