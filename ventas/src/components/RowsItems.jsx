import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export default function RowsItems({ datos }) {
  return (
    <div key={datos._id} className="productos-line">
      <span className="container-img-productos">
        <img src={datos.image_url || "/placeholder.svg"} alt={datos.name} />
      </span>
      <Link to={`/itemdetails/${datos._id}`}>
        {datos.name} {datos.price && `Precio: $${datos.price.toFixed(2)}`}
      </Link>
    </div>
  )
}

RowsItems.propTypes = {
  datos: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    image_url: PropTypes.string,
  }).isRequired,
}

