import QRCode from "qrcode";
import { useState } from "react";
import "./App.css";

function App() {
	const [url, setUrl] = useState("");
	const [qrcode, setQrcode] = useState("");

	const GenerateQRCode = () => {
		QRCode.toDataURL(
			url,
			{
				width: 256,
				margin: 2,
				borderRadius: 25,
			},
			(err, url) => {
				if (err) return console.error(err);
				setQrcode(url);
			}
		);
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
