import React, { useEffect, useState } from "react";
import axios from "axios";

function Subdomain({ subDomain }) {
  const [id, setId] = useState(null);
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://api.sites.localdomain")
        .then((res) => {
          console.log(res);
          if (res?.data?.id) {
            setId(res.data.id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Welcome to {subDomain}</h1>
      {id && <h1>Your Id is {id}</h1>}
    </div>
  );
}

export default Subdomain;
