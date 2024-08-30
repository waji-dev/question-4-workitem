import react, { useState } from "react"

const EAItem=({index,item,toggleItem,removeItem,updateItem,getItemByIndex})=>{

  const [isEditing,setIsEditing]=useState(false);
  const [indexText ,setIndexText] =useState('');
  
  function handleEdit(itemIndex){
    var obj = getItemByIndex(itemIndex);
    if(obj){
    setIndexText(obj.text)
    setIsEditing(true);}
  }

  return (

    <tr key={index}>
      <td>{index+1}</td>
      <td   style={{ cursor:'pointer' }}>
        
      <span
        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
    
      >
        {!isEditing && item.text}
        {isEditing && 
            <input type='text' onChange={(e)=>setIndexText(e.target.value)} value={indexText}
        
            className='form-control' />}
      </span>
      </td>
      <td>
      {item.completed===false &&  <button className='btn btn-success m-2' onClick={() => toggleItem(index)}>Completed</button> }
     
      { isEditing &&    <button 
      className='btn btn-danger' 
      onClick={() => { updateItem(index,indexText); setIndexText('');setIsEditing(false) }}>Update</button> }
      {!isEditing && <button className='btn btn-danger  m-2' onClick={() => handleEdit(index)}>Edit</button> }
      <button className='btn btn-warning  m-2' onClick={() => removeItem(index)}>Delete</button>
      </td>
    </tr>
  );
}
export default EAItem;