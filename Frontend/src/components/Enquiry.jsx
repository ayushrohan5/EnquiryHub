import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import {ToastContainer, toast} from 'react-toastify';

import EnquiryList from './EnquiryList';

const Enquiry = () => {
      let [enquiryList, setEnquiryList] = useState([]);
     let [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: ""
     });

    let saveEnquiry=(e)=>{
        e.preventDefault();
        // let formData = {
        //   name: e.target.name.value,
        //   email: e.target.email.value,
        //   phone: e.target.phone.value,
        //   message: e.target.message.value
        // }
           axios.post('http://localhost:8020/api/website/enquiry/insert', formData).then((res) => {
             console.log(res.data);
             toast.success('Enquiry saved successfully');
             setFormData({name: "", email: "", phone: "", message: ""});
           });
    }


    let getAllenquiry = ()=>{
      axios.get('http://localhost:8020/api/website/enquiry/view').then((res) => {
      return res.data
      }).then((finalData)=>{
        if(finalData.status){
          console.log(finalData.data);
          setEnquiryList(finalData.data);
        }

      })
    }

    let getValue=(e)=>{
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let oldData= {...formData};
        oldData[inputName] = inputValue;
        setFormData(oldData);
    }

       useEffect(()=>{

        getAllenquiry();

       },[])

  return (
    <>
    <ToastContainer/>
    <h1 className='text-[40px] text-center py-6 font-bold'>User Enquiry</h1>

    <div className = 'grid grid-cols-[30%_auto] gap-10'>

        <div className='bg-gray-200 p-4'>
            <h2 className = 'text-[20px] font-bold'>Enquiry Form</h2>
            <form action ="" onSubmit={saveEnquiry}>

              <div className="py-3">
            <Label htmlFor="name">Your Name</Label>
            <TextInput type="text" onChange={getValue} value={formData.name} name="name" placeholder="Enter your Name" required />
              </div>

              <div className="py-3">
            <Label htmlFor="email">Your Email</Label>
            <TextInput type="email" name="email" value={formData.email} onChange={getValue} placeholder="Enter your Email" required />
              </div>


              <div className="py-3">
            <Label htmlFor="phone">Your Phone</Label>
            <TextInput type="text" name="phone" onChange={getValue} value={formData.phone} placeholder="Enter your Phone" required />
              </div>

              <div className="py-3">
            <Label htmlFor="message">Your Message</Label>
            <Textarea name="message" onChange={getValue} value={formData.message} placeholder="Enter your Message" required rows={4} />
            </div>

            <div className="py-3">
            <Button type="submit" className="w-[100%]">Save</Button>
                </div>

            </form>
        </div>

<EnquiryList data={enquiryList} />
         


        </div>
         
    </>
  )
}

export default Enquiry