import { Link } from "react-router-dom";
import RowsItems from "./RowsItems";

export default function TableListCliente({ data }) {
  const midata = [...data];

  return (
    <>
      <input type="search" placeholder="Buscar" />
      {midata.map((datos, index) => (
        <Link to={`/itemdetails/${datos._id}`} key={datos._id}>
          <RowsItems datos={datos} />
        </Link>
      ))}
    </>
  );
}
