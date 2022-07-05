import { QRCodeCanvas } from 'qrcode.react';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")
  
  function getQRcode(e) {

    setText(e.target.value)
  }

  return (
    <div className="App antialiased h-screen flex flex-col justify-center bg-gradient-to-r from-rose-500 via-violet-800 to-fuchsia-800 items-center text-center">
      <h1 className="text-6xl font-bold mb-20 text-white ">QR Code <br/> Generator</h1>
      <div className='shadow-xl'>
        <QRCodeCanvas size={300} value={text} />
      </div>
      <div>
        <input type='text' placeholder='Enter your text here' className=' mt-20 px-9 py-3 outline-none shadow-2xl text-xl rounded-lg font-medium' value={ text } onChange={(e)=>{getQRcode(e)}} />
      </div>
      <h3 className='mt-20 font-semibold text-white'>Made with ❤️ by <a target="_blank" rel="noreferrer" href='https://twitter.com/itsprtm'>Prtm</a></h3>
    </div>
  );
}

export default App;
