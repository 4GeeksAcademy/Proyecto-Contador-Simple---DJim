import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";




//create your first component
const Home = (props) => {
	return (
	    <div className="container">
		       <div className="imagen">
			    <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/2784/2784399.png"></img>
		       </div>

		         <div className="sexto-digito"> {props.seis}</div>
		         <div className="quinto-digito">{props.cinco}</div>
		         <div className="cuarto-digito">{props.cuatro}</div>
		         <div className="tercer-digito">{props.tres}</div>
		         <div className="segundo-digito">{props.dos}</div>
		         <div className="primer-digito"> {props.uno}</div>

		
		
		
		
		
		
		




        </div>
	);
};
		






export default Home;