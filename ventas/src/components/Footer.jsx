export default function Footer() {
	const currentYear = new Date().getFullYear()
  
	return (
	  <footer className="footer">
		<div className="container-footer">
		  <h4>&copy; {currentYear} Kelvin Familia. Todos los derechos reservados</h4>
		</div>
	  </footer>
	)
  }
  
  