import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import {collection, getDocs} from "firebase/firestore"
import { db } from "./config/Firebase";
import ContactCard from './Components/ContactCard'

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () =>{
      try {
        const contactRef = collection(db, "contacts")
        const contactSnapshot = await getDocs(contactRef)
        const contactList = contactSnapshot.docs.map((doc) =>({
          id:doc.id,
          ...doc.data(),
        }))   
        setContacts(contactList);
      } catch (error) {
        console.log("erorr")  
      }
    };

    getContacts();
   
  },[])


  return (
    <>
    <div className='mx-auto max-w-92.5'>
     <Navbar />
    </div>
    <Search />
    <div className='gap-3'>
      {
        contacts.map((contact)=>(
          <ContactCard key={contact.id}
          contact={contact} />
        ))
      }
    </div>
    </>
  )
}

export default App
