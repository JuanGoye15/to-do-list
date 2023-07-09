import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState('');
	const [items, setItems] = useState([]);

	const addTask = () => {
		if (inputValue != '') {
			setItems([...items, inputValue]);
			setInputValue('');
		}
	}	
	
	const cambio = (e) => {
		setInputValue(e.target.value)
	}

	const deleteItems = (e) => {
		setItems(items => items.filter((item, i) => i !== e));
	}

	

	const act = () => {		
		return items.map((item, index)=>{		
		const dele = () => {
			deleteItems(index)
		}
		
			return (
				<>				
					<li className="list-group-item gap-3 fs-5 rounded" style={{paddingLeft: "500px"}} key={index}>{item}<button onClick={dele} className="rounded">						
					x
					</button>

					</li>
				</>
		)
		})				
	}


	return (
		<>
			<div className="input-group mb-7 justify-content-center p-3">
                <h1>Todos</h1>
            </div>
            <div className="input-group mb-7 justify-content-center p-3"> 
            	<button className="btn btn-success input-group-text" onClick={addTask}></button>           
                <input placeholder="What needs to be done?" value={inputValue} onChange={cambio}/>
            </div>
			<ul className="list-group justify-content-between ps-5 d-flex" style={{marginLeft: "200px", marginRight: "200px"}}>
				{act()}
			</ul>
		</>
	);
};

export default Home;
