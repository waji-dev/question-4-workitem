import React, { useState }  from "react";
import EAItem from "./EAItem";
const EAWorkList=({header,description})=>{
    const [text, setText] = useState('');
    const [workItems,setWorkItems] = useState([]);
    const handleSubmit = (e) => {
      e.preventDefault();
      addItem(text);
      setText('')
    };

    function toggleItem(index){
        setWorkItems(
            workItems.map((todo, i) =>
              i === index ? { ...todo, completed: !todo.completed } : todo
            )
          );
    }
    function addItem(text){
        setWorkItems([...workItems, { text, completed: false }]);
    }
    function removeItem(index){
        setWorkItems(workItems.filter((todo, i) => i !== index));
    }
    function updateItem(index,text){
        setWorkItems(
            workItems.map((todo, i) =>
              i === index ? { ...todo, text: text } : todo
            )
          );
    }
    function getItemByIndex(index){
        return workItems[index];
    }

    return (

    <div className="card">
        <div className="card-header">
            <h2>{header}</h2>
        </div>
        <div className="card-body">
            <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                                <input
                                    className='form-control'
                                    type="text"
                                    required="required"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                                <button className='btn btn-primary m-2' type="submit">Add Task</button>
                    </div>
                </form>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <table className="table table-responsive table-bordered">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workItems &&
                                workItems.map((item, index) => (
                                <EAItem
                                 key={index} 
                                 index={index} 
                                 item={item} 
                                 toggleItem={toggleItem} 
                                 removeItem={removeItem}
                                 updateItem={updateItem}
                                 getItemByIndex={getItemByIndex} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="card-footer">
             <span>{description}</span>
        </div>
    </div>
    );

}
export default EAWorkList;