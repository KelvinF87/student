import { useParams } from "react-router-dom";
export default function ItemDetails() {
	const {idDetails}=useParams
  return (
	<div className="error-404">
	  <h1>Aqui Estarán los detalles id {idDetails}</h1>
	  <p>Page Detaile</p>
	</div>
  );
}
