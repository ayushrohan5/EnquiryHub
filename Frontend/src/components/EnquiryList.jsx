import React from 'react'
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { toast, ToastContainer } from 'react-toastify';


const EnquiryList = ({data, getAllenquiry, Swal, setFormData}) => {
let deleteRow=(delid)=>{

    Swal.fire({

      title:"Do you want to delete this data?",
      showDenyButton:true,
      showCancelButton: true,
      confirmButtonText: "Save"
        

    }).then((result)=>{

      if (result.isConfirmed){

        axios.delete(`http://localhost:8020/api/website/enquiry/delete/${delid}`).then((res)=>{
          toast.success('Enquiry deleted successfully')
          getAllenquiry()
        });



      } else if(result.isDenied){
        Swal.fire("changes are not saved", "", "info");
      }


    })


  
}

        let editRow = (editid)=>{
              axios.get(`http://localhost:8020/api/website/enquiry/single/${editid}`)
              .then((res)=>{
                let data = res.data.enquiry
                setFormData(data);
              })

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
             
                <button onClick={()=>editRow(items._id)} className='bg-blue-500 text-white px-4 py-1 rounded-md'>
                Edit
                </button>
              
            </TableCell>
            <TableCell>
              <button onClick={()=>deleteRow(items._id)} className='bg-red-500 text-white px-4 py-1 rounded-md'>
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