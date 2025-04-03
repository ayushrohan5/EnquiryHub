import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const EnquiryList = ({data}) => {
let deleteRow=()=>{
  alert('delete');
}

  return (
    <>
      <div className="bg-gray-200 p-4">
        <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Sr No</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Email</TableHeadCell>
                <TableHeadCell>Phone</TableHeadCell>
                <TableHeadCell>Message</TableHeadCell>
                <TableHeadCell>Edit</TableHeadCell>
                <TableHeadCell>Delete</TableHeadCell>
              </TableRow>
            </TableHead>

            <TableBody className="divide-y">
              {data.length >= 1 ? (
                data.map((items, index) => {
                  return (<>
                   <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </TableCell>
            
            <TableCell>{items.name}</TableCell>
            <TableCell>{items.email}</TableCell>
            <TableCell>{items.phone}</TableCell>
            <TableCell>{items.message}</TableCell>
            <TableCell>
             
                <button className='bg-blue-500 text-white px-4 py-1 rounded-md'>
                Edit
                </button>
              
            </TableCell>
            <TableCell>
              <button onClick={deleteRow} className='bg-red-500 text-white px-4 py-1 rounded-md'>
                Delete
                </button>
             
            </TableCell>
          </TableRow>
                  </>);
                })
              ) : (
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="text-center" colSpan={7}>
                    No data Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default EnquiryList