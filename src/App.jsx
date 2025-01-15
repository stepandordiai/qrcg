import QRCode from "qrcode";

import "./App.css";
import { useState } from "react";

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
            <h1>QR Code Generator</h1>
            <input
                type="text"
                placeholder="write url here"
                value={url}
                onChange={(evt) => setUrl(evt.target.value)}
            />
            <button onClick={GenerateQRCode}>Generate</button>
            <img src={qrcode} alt="" />
        </div>
    );
}

export default App;
