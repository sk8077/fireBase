import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai"
// import { createPortal } from "react-dom"

/* eslint-disable no-unused-vars */
 const Modal = ({onClose, isOpen, children}) => {
  return createPortal(
    <>
      {isOpen && 
      (
      <>
       <div className=" z-50 relative items-center justify-center min-h-[200px] max-w-xl bg-white p-4 m-auto rounded">
          <div className="flex justify-end">
            <AiOutlineClose onClick={onClose} className="text-2xl"/>
          </div>
          {children}
        </div>
        <div onClick={onClose}  className=" absolute z-40 top-0 backdrop-blur w-screen h-screen"
        />
      </>
      )}
    </>,
  document.getElementById("modal-root"))
}

export default Modal