import QRCode from "qrcode";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [url, setUrl] = useState("");
	const [qrcode, setQrcode] = useState("");
	const [inputs, setInputs] = useState({});

	const GenerateQRCode = () => {
		QRCode.toDataURL(
			url,
			{
				width: 256,
				margin: 2,
				borderRadius: 25,
				color: {
					dark: inputs.qrColor,
					light: inputs.bgColor,
				},
			},
			(err, url) => {
				if (err) return console.error(err);
				setQrcode(url);
			}
		);
	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	return (
		<>
			<header className="header">
				<p className="header__logo">QRCG</p>
			</header>
			<main className="main">
				<div className="qr-img-container">
					{qrcode && (
						<>
							<img src={qrcode} alt="" />
							<a
								className="qr-img-download-link"
								href={qrcode}
								download="qrcode.png"
							>
								Download
							</a>
						</>
					)}
				</div>
				<div>
					<label htmlFor="qr-input">Enter your Website</label>
					<div className="input-container">
						<input
							id="qr-input"
							type="text"
							placeholder="https://"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
						/>
						<button onClick={GenerateQRCode}>Generate</button>
					</div>
				</div>
				<div>
					<div className="input-clr-container">
						<label htmlFor="">Set background color</label>
						<input
							type="color"
							onChange={handleChange}
							name="bgColor"
							id="bg-color"
						/>
					</div>
					<div className="input-clr-container">
						<label htmlFor="">Set qr color</label>
						<input type="color" onChange={handleChange} name="qrColor" id="" />
					</div>
				</div>
			</main>
			<footer className="footer">
				<p className="creator">
					Designed and developed by{" "}
					<a href="https://stepandordiai.netlify.app" target="_blank">
						Stepan Dordiai
					</a>
				</p>
			</footer>
		</>
	);
}

export default App;
