import React, { useRef, useState } from 'react';

const AddCaptionPage = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImage(imgURL);
    }
  };

  const drawImageWithCaption = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = image;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      ctx.font = '150px Arial';
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      const x = 20;
      const y = img.height - 40;
      ctx.strokeText(caption, x, y);
      ctx.fillText(caption, x, y);
    };
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'captioned-image.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center' }}>ADD CAPTION PAGE ②</h2>

      <div style={{ display: 'flex', gap: '20px', marginTop: 20 }}>
        <div style={{ flex: 2, border: '1px solid black', minHeight: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <canvas ref={canvasRef} style={{ maxWidth: '100%', maxHeight: 400 }} />
        </div>

        <div style={{ flex: 1, border: '1px solid black', display: 'flex', flexDirection: 'column' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ padding: 10, borderBottom: '1px solid black' }}
          />
          <input
            type="text"
            placeholder="Add Ct"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            style={{ padding: 10, borderBottom: '1px solid black' }}
          />
          <button
            onClick={drawImageWithCaption}
            style={{ padding: 10, background: '#ddd', borderTop: '1px solid black' }}
          >
            ADD CT
          </button>
          <button
            onClick={handleDownload}
            style={{ padding: 10, marginTop: 'auto', background: '#bbb' }}
          >
            DOWNLOAD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCaptionPage;
