import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  const [inpt, setinpt] = useState("");
  const [data, setdata] = useState([]);
  const [flag, setflag] = useState(false);
  const [Itemflag, serItemflag] = useState(false);
  const [temp, settemp] = useState({});
  const getData = async () => {
    if (inpt === "") {
      setflag(true);
    } else {
      const data = await axios
        .get("http://localhost:3001/Contry")
        .then(function (response) {
          const temp = response.data;
          const data = temp.filter((x) =>
            x.country.toLowerCase().includes(inpt.toLowerCase())
          );
          console.log("data", data);
          setdata(data.splice(1, 5));
          setflag(false);
        });
    }
  };
  useEffect(() => {
    getData();
  }, [inpt]);

  return (
    <div className="m-auto text-center p-4">
      <div>
        {!Itemflag ? (
          <div className="App container">
            <input
              type="text"
              value={inpt}
              placeholder="Enter Country Name"
              onChange={(e) => {
                // if (e.target.value.length > 2) {
                setinpt(e.target.value);
                // }
              }}
            />
            {!flag ? (
              <div className="list">
                {data?.map((e, i) => (
                  <div
                    onClick={() => {
                      settemp(e);
                      serItemflag(true);
                    }}
                    className="prlist"
                    key={i}
                  >
                    <span>{e.country}</span>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="App">
            <h1>{temp.country}</h1>
            <p>{temp.city}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                serItemflag(false);
              }}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
