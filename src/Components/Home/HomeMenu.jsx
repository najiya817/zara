import { useState, useEffect } from "react";
import React from "react";
import "../../CSS/HomeMenu.css";
import { NavLink } from "react-router-dom";

const HomeMenu = () => {
	const [cat, setcat] = useState([]);
	// const [Id, setId] = useState([]);

	useEffect(() => {
		fetch("http://127.0.0.1:8000/cat/")
			.then((response) => response.json())
			.then((data) => {
				setcat(data);
				console.log(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	},[]);

	function categoryClickHandler(ct_id) {
		fetch(`http://127.0.0.1:8000/prod/?ct_id=${ct_id}`)
			.then((response) => response.json())
			.then((data) =>{
				console.log(data)
			})
			.catch((error) => console.error("Error fetching data:", error));
	}


	return (
		<>
			<div className="list">
				<ul>
					{cat.map((catg) => {
						return (
							<NavLink to={`/pro/${catg.ct_id}/`}><button onClick={() => categoryClickHandler(catg.ct_id)}>
								<li key={catg.ct_id}>{catg.ct_name}</li>
							</button></NavLink>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default HomeMenu;
