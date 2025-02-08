import { Link } from "react-router-dom";

export default function RowsItems({ datos }) {
	
  return (
	<>	
	  <div key={datos._id}>
		<div className="productos-line">
		  <span className="container-img-productos">
			<img src={datos.image_url} alt="" />
		  </span>
		  {datos.name} {datos.price && `Precio: ${datos.price}`} 
		</div>
		<hr />
	  </div>
	</>
  );
}
