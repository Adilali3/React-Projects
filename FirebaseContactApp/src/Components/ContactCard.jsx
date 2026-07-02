import React from 'react'
import { RiContactsFill } from "react-icons/ri";
import { RiEditCircleLine } from "react-icons/ri";
import { FaTrashRestore } from "react-icons/fa";

function ContactCard({ contact }) {
    console.log(contact)
  return (
    <div key={contact.id} className='bg-white flex justify-between items-center my-5 rounded-2xl p-3 min-h-16'>
        <div className='flex items-center gap-3 w-full justify-center'>
            <RiContactsFill className="text-orange-500 text-2xl"/>
            <div className='flex flex-col items-center justify-center flex-1'>
                <h2 className='font-bold'>{contact.name}</h2>
                <p>{contact.email}</p>
            </div>
        </div>
        <div className='flex justify-between items-center gap-4 mr-2'>
            <RiEditCircleLine className='text-2xl'/>
            <FaTrashRestore className='text-2xl text-red-500'/>
        </div>
    </div>
  )
}

export default ContactCard
