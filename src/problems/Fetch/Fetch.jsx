import { useEffect, useState } from "react";
import Card from "./Card";

const Fetch = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <h1 className=" text-3xl font-bold text-center ">Problem 6</h1>
      <hr className=" my-2 broder border-gray-500" />
      <div className=" grid grid-cols-3 gap-4">
        {photos.slice(0, 20).map((photo, index) => (
          <Card key={index} photos={photo}></Card>
        ))}
      </div>
    </div>
  );
};

export default Fetch;
