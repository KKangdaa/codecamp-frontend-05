import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function Address() {
  const [address, setAddress] = useState("");

  const onCompleteDaumPostcode = (data: any) => {
    setAddress(data.address);
  };

  return <DaumPostcode onComplete={onCompleteDaumPostcode} />;
}
