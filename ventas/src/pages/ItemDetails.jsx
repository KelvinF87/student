import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import dataProductos from "../data/productos.json";

export default function ItemDetails() {
  const { idDetails } = useParams();
  const navigate = useNavigate();
  const producto = dataProductos.find((producto) => producto._id == idDetails);

  const handleGoBack = () => {
    navigate(-1); // Lo mismo que history.goBack()
  };

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
      <div className="item-details">
        <h1>Detalles del Producto</h1>
      </div>

      <div className="container-item-details">
        <div className="card-item-details">
          <img src={producto.image_url} alt={producto.name} />
          <h2>{producto.name}</h2>
          <hr />
          <br />
          <p>ID del producto:<span> {idDetails}</span></p>
          <p>{producto.descripcion}</p>
          <p>Precio:<span> {producto.price}€</span></p>
          <p>Unidades vendidas:<span> {producto.sales}</span></p>
<hr />
          <button
            className="btn-default"
            style={{ width: 150, textAlign: "center", fontSize: 16,marginTop: 10, transition: "all 0.3s" }}
            onClick={handleGoBack}
          >
           ⬅️ Volver
          </button>
        </div>
      </div>
    </>
  );
}
