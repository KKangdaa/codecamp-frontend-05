import axios from "axios";
import { useEffect, useState } from "react";

export default function AxiosOpenApi() {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDog(result.data.message);
    };
    fetchDog();
  }, []);

  return <img src={dog} />;
}
