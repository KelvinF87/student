import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function ItemDetails() {
  const { idDetails } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Equivalente a history.goBack()
  };

  return (
    <div className="item-details">
      <h1>Detalles del Producto</h1>
      <p>ID del producto: {idDetails}</p>
      {/* Add more details here */}
      <div>
        <button className="btn-default" onClick={handleGoBack}>
          Volver
        </button>
      </div>
    </div>
  );
}
