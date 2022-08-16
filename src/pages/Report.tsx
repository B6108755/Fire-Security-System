import React from "react";
import { Button } from "antd";
import { FilePdfOutlined, TableOutlined } from "@ant-design/icons";
import Table_report from '../components/Table_report'
type Props = {};

const Report = (props: Props) => {
  return (
    <div className="bg-gray-1000 h-full p-6 ">
      <div className="bg-zinc-900 divide-y divide-slate-100 h-60">
        <div className="flex p-5 h-24 ">
          <div className="w-20 flex flex-col ">
            <div className="font-medium text-2xl">Report</div>
            <div className="italic text-gray-400 text-lg">Report</div>
          </div>
          <div className="grow"></div>
          <div className="w-80 flex items-end  justify-end">
            {/* <div className='w-20 h-20 bg-green-400'>20</div> */}
            <button className="w-32 h-11 mx-4 flex justify-center items-center bg-stone-800 hover:bg-stone-400 text-lg">
              <TableOutlined className="text-lime-500 mr-1 " />
              Excel
            </button>
            <button className="w-32 h-11 flex justify-center items-center bg-stone-800 hover:bg-stone-400 text-lg">
              <FilePdfOutlined className="text-red-600 mr-1 " /> 
              <span className="">PDF</span> 
            </button>
          </div>
        </div>

        <div className="">
          <div className="flex p-5 h-30 ">
            
            <div className="w-1/2 flex flex-row ">
              <div className="w-52 flex flex-col mr-3 ">
                <div className="font-medium text-lg">Network</div>
                <div className="italic text-gray-400 ">
                  <input type="text" placeholder="Network" className="w-full bg-zinc-700 pl-2 h-10"  />
                </div>
              </div>
              <div className="w-52 flex flex-col ">
                <div className="font-medium text-lg">Location</div>
                <div className="italic text-gray-400">
                  <input type="text" placeholder="Location" className="w-full bg-zinc-700 pl-2 h-10" />
                </div>
              </div>
            </div>
            <div className="w-1/2 flex items-end  justify-end">
              <button className="w-32 h-11 mx-4 flex justify-center items-center bg-red-900 hover:bg-stone-400 text-xl">
                Cancle
              </button>
              <button className="w-32 h-11 flex justify-center items-center bg-red-600 hover:bg-stone-400 text-xl">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-6 font-medium text-xl">
            July/2022
        </div>
        <div>
            < Table_report />
        </div>
        <div className="my-6 font-medium text-xl">
            June/202
        </div>
        <div>
            < Table_report />
        </div>
      </div>
    </div>
  );
};

export default Report;
