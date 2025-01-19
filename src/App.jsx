import QRCode from "qrcode";
import { useState } from "react";
import "./App.css";

function App() {
    const [url, setUrl] = useState("");
    const [qrcode, setQrcode] = useState("");

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, (err, url) => {
            if (err) return console.error(err);
            console.log(url);
            setQrcode(url);
        });
    };
    return (
        <div>
            <header className="header">
                <p className="logo">QRCG</p>
            </header>
            <main className="main">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="write url here"
                        value={url}
                        onChange={(evt) => setUrl(evt.target.value)}
                    />
                    <button onClick={GenerateQRCode}>Generate</button>
                </div>
                <div className="img-container">
                    <img src={qrcode} alt="" />
                </div>
            </main>
        </div>
    );
}

export default App;
