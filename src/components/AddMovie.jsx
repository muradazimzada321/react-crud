import { addDoc} from 'firebase/firestore'
import React, {useState} from 'react'
import '../App.css'
import { movieCollectionRef } from "../lib/firestore.collections";

export default function AddMovie()
{
    const [Name,setName] = useState('')
    const [Editor,setEditor] = useState('')
    const [Year,setYear] = useState('')

   function handleSubmit(e) {
       e.preventDefault();
       if(Name==='' || Editor==='' || Year==='')
     {  alert('All fields must be filled out')
       return
     }
      addDoc(movieCollectionRef,{Name,Editor,Year}).then(response =>{
      console.log(response)}).catch(error=>{console.log(error)})
   }
   return (
      <div>
          <h4>Add Movie</h4>
          <form  onSubmit={handleSubmit}>
                  <div className='childAddComponent' > 
                      <label>Name</label>
                      <input id='Name' value={Name} onChange={e=> setName (e.target.value)}/>   
                   </div>
         <div className='childAddComponent'>
         <label>Editor</label>
               <input id='Editor' value={Editor} onChange={
                   e=> setEditor (e.target.value)}/>
         </div>

       <div className='childAddComponent'>
             <label>Year</label>
               <input type='number' min={1900} id='Year' value={Year} onChange={
                   e=> setYear (e.target.value)}/>
                  
       </div>
          <div className='childAddComponent'>  
          <button className='addButton' type='submit'>Add Movie</button></div>
          </form>

         
      </div>

    )
}