import { useEffect, useState } from "react";
import "./App.css";

interface Advice {
	id: number;
	advice: string;
}

function App() {
	const [data, setData] = useState<Advice>();

	const URL = "https://api.adviceslip.com/advice";

	const handleFetch = () => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => setData(data.slip));
	};

	useEffect(() => {
		handleFetch();
	}, []);

	return (
		<main className="App">
			<div className="container">
				<div className="advice-id">
					<span>Advice {data?.id}</span>
				</div>
				<div className="advice-content">
					<p>{data?.advice}</p>
				</div>
				<div className="divider"></div>
				<div onClick={handleFetch} className="logo"></div>
			</div>
		</main>
	);
}

export default App;
