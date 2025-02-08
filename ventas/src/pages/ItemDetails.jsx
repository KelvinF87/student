import { useParams } from "react-router-dom"

export default function ItemDetails() {
  const { idDetails } = useParams()

  return (
    <div className="item-details">
      <h1>Detalles del Producto</h1>
      <p>ID del producto: {idDetails}</p>
      {/* Add more details here */}
    </div>
  )
}

