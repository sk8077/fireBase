import Navbar from "./components/Navbar";
import {FiSearch} from "react-icons/fi"
import {AiFillPlusCircle} from "react-icons/ai"
import { useState , useEffect} from "react";
import {collection, onSnapshot} from "firebase/firestore"
import {db} from "./Config/firebase"
import ContactsCards from "./components/ContactsCards";
import AddUpdateContact from "./components/AddUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
   
  const [contacts, setContacts]=useState([]) 
  const {onClose, onOpen, isOpen}=useDisclose()

  useEffect(()=>{
    const getContacts= async () =>{
      try {
        const contactsRef=collection(db,"contacts")
        onSnapshot(contactsRef, (snapshot)=>{
          const contactsList=snapshot.docs.map((doc)=>{
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setContacts(contactsList)
          return contactsList
        })
      } catch (error) {
        console.log(error )
      }
    }
    getContacts();
  },[])

  const filterContacts=(e)=>{
    const value=e.target.value

    const contactsRef=collection(db,"contacts")
    onSnapshot(contactsRef, (snapshot)=>{
      const contactsList=snapshot.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      const filterContacts=contactsList.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase())) 
      setContacts(filterContacts)
      return filterContacts
    })
  }

  return (
    <>
     <div className="max-w-[350px] mx-auto">
      <Navbar />
      <div className="flex gap-2 flex-col">
        <div className="flex relative items-center flex-grow ">
          <FiSearch className="text-white text-3xl absolute ml-1 cursor-pointer"/>
          <input onChange={filterContacts} type="text" className=" bg-transparent border border-white rounded-md h-11 flex-grow pl-9 text-white"/>
        </div>
        <AiFillPlusCircle onClick={onOpen} className="text-3xl self-center text-white cursor-pointer"/>
      </div>
      <div className="mt-2 gap-2 flex flex-col">
        {  contacts.length<1? (<NotFoundContact/>):(contacts.map((contact)=>( 
          <ContactsCards key={contact.id} contact={contact}/>
        )))}
      </div>
    </div> 
    <AddUpdateContact isOpen={isOpen} onClose={onClose}/>
    <ToastContainer position="bottom-center"/>
    </>
  );
};

export default App; 
