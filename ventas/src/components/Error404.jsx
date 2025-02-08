import Img404 from "../assets/404error.gif"
export default function Error404(){
	return(
		<div className="error404">
			<h1>404 Error</h1>
			<img src={Img404} alt="img error 404" />
		</div>
		)
}