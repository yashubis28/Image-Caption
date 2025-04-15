import React, { useState, useEffect } from "react";

const SearchPage = () => {
  const [searchName, setSearchName] = useState("mobile");
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchName}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`);
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    getImages(); 
  }, []);

  const handleSearch = () => {
    getImages(); 
  };

  return (
    <><h2>Search Page</h2>

    <div style={{alignItems:'start'}}>
      <p>
        <strong>Name:</strong> Yash Gupat
      </p>
      <p>
        <strong>Email:</strong> yashubis28@gmail.com
      </p>
      <p>
        <strong>Add caption page:</strong><a href='/AddCaptionPage'>Caption</a>
      </p>
    </div>
    <div style={{ padding: "20px" }}>
    
     

      <div style={{ display: "flex", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Enter your search term"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            flex: 1,
            marginRight: "10px",
          }}
        />
        <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
         Search
        </button>
      </div>

      {images.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={img.urls.small}
                alt=''
                style={{ width: "100%", borderRadius: "6px" }}
              />
              <input
                type="text"
                placeholder="Add Caption"
                style={{
                  marginTop: "10px",
                  padding: "5px",
                  width: "90%",
                  fontSize: "14px",
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default SearchPage;
