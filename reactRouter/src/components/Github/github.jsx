import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Jaipal-003")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-5 bg-gray-700 text-white p-5 text-4xl">
      Github followers:{data.followers}
      <img className="text-center" src={data.avatar_url} alt="Git Picture" width={250} />
    </div>
  );
}

export default Github;
  