import qrImage from "./assets/images/imageqrcode.png";
import './Styles/style.css';

function App() {
  return (
    <div id='mainContainer'>
      <div id='card'>
        <img src={qrImage} alt='qr code image' />
        <div id='cardTextSection'>
          <h1>Improve your front-end skills by building projects</h1>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  )
}

export default App
