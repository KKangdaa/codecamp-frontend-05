import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      // console.log(result.data.message);
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  return (
    <>
      <div>오픈 API 연습</div>
      <img src={dogUrl} />
    </>
  );
}
