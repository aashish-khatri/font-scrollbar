import React from 'react'
import './color.css'

const ColorInput = () => {
	return(
		<div className = "color" >
			<div>
				<input className="color1" type="color" value="#1C0FCC"/> 
				<span className="text"> Fill</span>
			</div>
			<div>
				<input className="color2" type="color" value="#1C0FCC"/> 
				<span className="text"> Border</span>
			</div>
			<div>
				<input className="color3" type="color" value="#1C0FCC"/> 
				<span className="text"> Shadow</span>
			</div>
		</div>
	);
}

export default ColorInput;