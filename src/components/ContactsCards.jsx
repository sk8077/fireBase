import { deleteDoc, doc } from 'firebase/firestore'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from "../Config/firebase"
import AddUpdateContact from './AddUpdateContact'
import useDisclose from '../hooks/useDisclose'
import { toast } from 'react-toastify'
// eslint-disable-next-line react/prop-types
const ContactsCards = ({contact}) => {

  const {onClose, onOpen, isOpen}=useDisclose()

  const deleteContact=async(id)=>{
    try {
      await deleteDoc(doc(db, "contacts", id))
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div key={contact.id} className="bg-yellow flex items-center justify-between rounded-lg p-1 flex-col sm:flex-row gap-1">
            <div className="flex gap-1">
              <HiOutlineUserCircle className="text-orange text-4xl"/>
              <div className="">
                <h2 className="font-medium">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div> 
            <div className="flex text-3xl">
              <RiEditCircleLine className='cursor-pointer' onClick={onOpen}/>
              <IoMdTrash onClick={()=>deleteContact(contact.id)
              }className="cursor-pointer text-orange"/>
            </div>
          </div>
          <AddUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
          </>
  )
}

export default ContactsCards 