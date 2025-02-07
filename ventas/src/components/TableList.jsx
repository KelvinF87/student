export default function TableList({ data }) {
	const midata = [...data];
	console.log(midata);
	return (
	  <>
		{midata.map((datos, index) => (
		  <div key={datos._id}>
			<h2>{datos.name}</h2>
			<h2>{datos.descripcion}</h2>
		  </div>
		))}
	  </>
	);
  }
  