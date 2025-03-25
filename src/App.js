import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  // v1 (MVP) Features
  // 1. Live Preview
  // 2. Download Image

  // 1. Live Preview
  // algorithm
  // step 1: create state variables 
  // step 2: create function to update value 
  // step 3: use the updated values in preview
  
  // 2. Download Image
  // algorithm
  // step 1: create function to download image 
  // step 2: call the function on download button click 
  // step 3: use htnltocanvas library to download .preview div as an image
  
  // v2 Features
  // 1. Dynamic Background

  // 1. Dynamic Background
  // algorithm
  // step 1: create 3 images and variables
  // step 2: create function to change selected image
  // step 3: change background image in preview

  // content
  const [greeting, setGreeting] = useState("")
  const [msg, setMsg] = useState("")
  const [name, setName] = useState("")

  // to download .preview div as image
  const handleDownload = () => {
    // Get the preview div element
    const previewDiv = document.querySelector('.preview');

    // Use html2canvas to capture the div as an image
    html2canvas(previewDiv).then((canvas) => {
      // Convert the canvas to a data URL (image format)
      const imageUrl = canvas.toDataURL('image/png');

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'preview-image.png'; // File name for download

      // Programmatically click the link to trigger the download
      link.click();
    });
  };

  // background image
  const imgPath = {
    bg: "/assets/images/bg.png",
    bg2: "/assets/images/bg2.jpg",
    bg3: "/assets/images/bg3.jpg",
  }
  const [selectedImage, setSelectedImage] = useState(imgPath.bg)

  // style
  const fontImgPath = {
    bg1: "/assets/images/font-bg-1.png",
    bg2: "/assets/images/font-bg-2.png",
    bg3: "/assets/images/font-bg-3.png",
  }
  const fonts = {
    f1: "Saleha",
    f2: "Saleha",
    f3: "Saleha",
  }
  const [selectedFontImage, setSelectedFontImage] = useState(fontImgPath.bg1)

  return (
    <div className='container'>
      <h1>Post Generator</h1>
      <div className='row'>
        <div className='col-md-6'>
          {/* create form */}
          <div className='card'>
            <div className='card-header'>Content</div>
            <div className='card-body'>
              <form>
                {/* greeting */}
                <label htmlFor='greeting'>Greeting: </label>
                <input type='text' id='greeting' name='greeting' placeholder='Enter Greeting' onChange={(e)=>{
                  setGreeting(e.target.value)
                }} /><br />

                {/* msg */}
                <label htmlFor='msg'>Message: </label>
                <input type='text' id='msg' placeholder='Enter Message' onChange={(e)=>{
                  setMsg(e.target.value)
                }} /><br />

                {/* name */}
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' placeholder='Enter Name' onChange={(e)=>{
                  setName(e.target.value)
                }} /><br />
              </form>
            </div>
          </div>
          {/* background images */}
          <div className='card mt-3'>
            <div className='card-header'>Background Images</div>
            <div className='card-body'>
              <div className='img-holder'>
                <img src={imgPath.bg} style={{border: selectedImage == imgPath.bg ? '2px solid #ff0041' : ''}} onClick={()=>{
                  setSelectedImage(imgPath.bg)
                }} />
                <img src={imgPath.bg2} style={{border: selectedImage == imgPath.bg2 ? '2px solid #ff0041' : ''}} onClick={()=>{
                  setSelectedImage(imgPath.bg2)
                }} />
                <img src={imgPath.bg3} style={{border: selectedImage == imgPath.bg3 ? '2px solid #ff0041' : ''}} onClick={()=>{
                  setSelectedImage(imgPath.bg3)
                }} />
              </div>
            </div>
          </div>
          {/* styles */}
          <div className='card mt-3'>
            <div className='card-header'>Styles</div>
            <div className='card-body'>
              <div className='img-holder'>
                <img className="font-bg-image" src={fontImgPath.bg1} style={{border: selectedFontImage == fontImgPath.bg1 ? '2px solid #ff0041' : ''}} onClick={()=>{
                  setSelectedFontImage(fontImgPath.bg1)
                }} />
                <img className="font-bg-image" src={fontImgPath.bg2} style={{border: selectedFontImage == fontImgPath.bg2 ? '2px solid #ff0041' : ''}} onClick={()=>{
                  setSelectedFontImage(fontImgPath.bg2)
                }} />
                <img className="font-bg-image" src={fontImgPath.bg3} style={{border: selectedFontImage == fontImgPath.bg3 ? '2px solid #ff0041' : ''}} onClick={()=>{
                  setSelectedFontImage(fontImgPath.bg3)
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* preview */}
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>Preview</div>
            <div className='card-body'>
              {/* <div className='preview' style={{backgroundImage: `url(${selectedImage})`}}> */}
              <div className='preview' style={{backgroundImage: `url(${selectedImage})`}}>
                <h2 className='colorWhite' style={{fontFamily: selectedFontImage == fontImgPath.bg1 ? fonts.f1 : ''}}>{greeting}</h2>
                <p className='colorWhite'>{msg}</p>
                <h4 className='colorWhite'>{name}</h4>
              </div>
              <button onClick={handleDownload}>Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
