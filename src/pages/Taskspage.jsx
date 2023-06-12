import { useEffect, useState } from "react";
 import '../style/taskpage.css'
 import { databases, DatabaseId, collectionId } from "../config";
 import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
 import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import AdviceGenerator from "../components/AdviceGenerator";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { userContext } from '../context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Taskspage = () => {
 const [showForm, setshowform] = useState(true);
 const [showNew, setshowNew] = useState(true);
 const [showDelete, setshowDelete] = useState(true);
 const [toggleSubmit, settoggleSubmit] = useState(true);
 const [isEditItem, setisEditItem] = useState(null);
 const [showList, setshowList] = useState(true);
 const [deleteMessage, setdeleteMessage] = useState(false);
 const [deleteMessagesuccess, setdeleteMessagesuccess] = useState(false);
 const [inputTitle, setinputTitle] = useState("");
 const [inputDesc, setinputDesc] = useState("");
 const [inputDate, setInputDate] = useState("");  

 const [uid, setUid] = useState('')
 const { login, setLogin,} = useContext(userContext)
 const navigate = useNavigate()

 

 const [items, setitems] = useState([
 ]);
 useEffect(() => {
  const promise = databases.listDocuments(DatabaseId, collectionId);

  promise.then(function (response) {
    setitems(response.documents)
  }, function (error) {
      console.log(error); 
  });
 
   
 }, [])
 
 
 //   HANDLING INPUT FIELDS
 const handleInput = (e) => {
   setinputTitle(e.target.value);
 };
 const handleInputdesc = (e) => {
   setinputDesc(e.target.value);
 };
 const handleInputdate = (e) => {
  setInputDate(e.target.value)
 }
 //   HANDLING INPUT FIELDS
 
 //   SUBMITTING FORM
 const handleSubmit = (e) => {
   setshowList(true);
   setshowNew(true);
 
   e.preventDefault();
   if (!inputTitle || !inputDesc) {
     toast.error("Fill Tasks")
     showList(false);
   } else if (inputTitle && !toggleSubmit) {
    
     setitems(
       items.map((elem) => {
         if (elem.id === isEditItem) {
           return { ...elem, name: inputTitle, desc: inputDesc };
         }
         return elem;
       })
     );
     toast.success('Edited successfully')
 
     setinputTitle("");
     setinputDesc("");
     setInputDate("")
     settoggleSubmit(true);
     setshowform(false);
     setshowDelete(true);
   } else {
    
     const allinputTitle = {
       id: new Date().getTime().toString(),
       name: inputTitle,
       desc: inputDesc,
       date: inputDate
     };
     const promise = databases.createDocument(DatabaseId, collectionId, allinputTitle.id, allinputTitle);
    promise.then(function (response) {
    }, function (error) {
        console.log(error); // Failure
    });
     setitems([allinputTitle, ...items]);
     setinputTitle("");
     setinputDesc("");
     setInputDate("")
     setshowform(false);
     toast.success("Added successfully")
   }
 };
 //   SUBMITTING FORM
 
 //   DELETE
 const handleDelete = (index) => {
   const updatedItems = items.filter((elem) => {
     return index !== elem.id;
   });
   const promise = databases.deleteDocument(DatabaseId, collectionId, index);
      promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
   setdeleteMessage(true);
   toast.success("Deleted successfully")
 
   setTimeout(() => {
     setitems(updatedItems);
     setdeleteMessage(false);
   }, 2000);
   setdeleteMessagesuccess(false);
 };
 //   DELETE
 
 //   EDIT
 const handleEdit = (id) => {
  setUid(id)
   setshowList(false);
   setshowDelete(false);
   setshowNew(false);
   setshowform(true);
 
   settoggleSubmit(false);
   let newEditItem = items.find((elem) => {
     return elem.id === id;
   });
   setinputTitle(newEditItem.name);
   setinputDesc(newEditItem.desc);
   setInputDate(newEditItem.date)

 
   setisEditItem(id);

 };
 //   EDIT
 
 // ADD NEW TASK
 const handleAdd = () => {
   //   alert("hello")
   setshowform(true);
   setshowList(true);
   setshowNew(false);
 };
 // ADD NEW TASK

const handleUpdate =  () => {
  const promise = databases.updateDocument(DatabaseId,collectionId, uid ,{name: inputTitle, desc: inputDesc, date: inputDate});
  promise.then(function (response) {
}, function (error) {
    console.log(error); // Failure
    
});
}


// Logout from APP

const handleLogout = () => {
  setLogin(false)
  localStorage.setItem('isLogin', JSON.stringify(!login));
  navigate('/login')
  toast.success("successfully logged out")
}
 return (
   <>
     {showNew ? (
       <div className="m-7">
         <div className="col-12 text-end">
           <button className="bg-green px-5 py-4  text-white rounded m-5 font-bold text-lg " onClick={handleAdd}>
             <AddOutlinedIcon />
           </button>
           <button onClick={handleLogout} className='bg-error px-5 py-4  text-white rounded m-5'>
            Logout
           <LogoutOutlinedIcon />
           </button>

         </div>
       </div>
     ) : (
       ""
     )}
 
     {showForm ? (
       <>
         <div className="container-fluid">
           <div className="px-5">
             <div className="text-center">
               <h2 className="text-2xl font-krona ">{toggleSubmit ? "Add Task" : " Edit Task"}</h2>
             </div>
             <form className="" onSubmit={handleSubmit}>
              <div className="mb-2">
              <label htmlFor="title " className="block mb-2 text-lg font-medium text-black">
                 Enter Title
               </label>
               <input
                 type="text"
                 name="title"
                 id="title"
                 placeholder="Title"
                 className="bg-gray-50 border border-gray-300  text-lg rounded-lg  block w-full p-2 placeholder-gray focus:border-blue-500"
                 onChange={handleInput}
                 value={inputTitle}
               />
              </div>
              <div className="mb-2">
              <label className="block mb-2 text-lg font-medium text-black" htmlFor="description">
                 Enter Description
               </label>
               <input
                 type="text"
                 name="description"
                 id="description"
                 placeholder="Description"
                 className="bg-gray-50 border border-gray-300  text-lg rounded-lg  block w-full p-2 placeholder-gray focus:border-blue-500"
                 onChange={handleInputdesc}
                 value={inputDesc}
               />
              </div>
              <div className="mb-2">
              <label className="block mb-2 text-lg font-medium text-black" htmlFor="date">
                 Enter Date
               </label>
               <input
                 type="text"
                 name="date"
                 id="date"
                 placeholder="yyyy-mm-dd"
                 className="bg-gray-50 border border-gray-300  text-lg rounded-lg  block w-full p-2 placeholder-gray focus:border-blue-500"
                 onChange={handleInputdate}
                 value={inputDate}
               />
              </div>
               
               {/* <div className="text-center"> */}
               {toggleSubmit ? (
                 <button className="text-white bg-green hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
               ) : (
                 <button className="text-white bg-green hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleUpdate} >Update</button>
               )}
               {/* </div> */}
             </form>
           </div>
         </div>
       </>
     ) : (
       ""
     )}
 
     {showList ? (
       <div className="px-5 ">
         {deleteMessage ? (
           <p className="text-error align-center"></p>
         ) : (
           ""
         )}
         {items.length == 0 ? <h2 className="font-krona text-2xl ml-8 mt-8">No Tasks </h2> : items.map((elem) => {
           return (
             <div
               className="rounded shadow-md p-3 mb-3 bg-white "
               key={elem.id}
             >
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                 <div>
                   <h4 className="font-krona text-xl font-medium ">{elem.name.toUpperCase()}</h4>
                   <p className="font-inter text-lg font-small">{elem.desc}</p>
                   <p className="font-inter text-lg font-small">{elem.date.slice(0,10)}</p>

                 </div>
                 <div>
                 <button
                     className="px-4 py-3 align-center bg-green text-white rounded mx-2"
                     onClick={() => handleEdit(elem.id)}
                   >
                    <EditNoteOutlinedIcon /> 
                   </button>
                   {showDelete ? (
                     <button
                       className="px-4 py-3 align-center bg-error text-white rounded mx-2"
                       onClick={() => handleDelete(elem.id)}
                     >
                       <DeleteOutlineOutlinedIcon  />
                     </button>
                   ) : (
                     ""
                   )}

                 </div>
                   
                 </div>
               </div>
            
           );
         })}
       </div>
     ) : (
       ""
     )}
     <AdviceGenerator />
     <ToastContainer />
   </>
 );
};
 
export default Taskspage;
