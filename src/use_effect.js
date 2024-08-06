import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const Task = () => {
  const [selectedOption1, setSelectedOption1] = useState("PK");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [data, setdata] = useState([]);

  const handleSelectChange1 = (event) => {
    const value = event.target.value;
    setSelectedOption1(value);
    console.log(value); // This
  };

  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleSelectChange3 = (event) => {
    setSelectedOption3(event.target.value);
  };

  const url = "http://universities.hipolabs.com/search";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((userData) => {
        setdata(userData);
      })
      .catch((error) => {
        console.log(error + "asasa");
      });
  }, []);

  // display function to display cards

  const display = () => {
    // using if statement to check if there is data, then show cards to aviod errors
    {
      if (data.length > 0) {
        const cards = [];
        console.log(selectedOption1);
        let filtered_data = data.filter((item) => {
          return item.alpha_two_code == selectedOption1;
        });
        for (let index = 0; index < 12; index++) {
          cards.push(
            <div
              key={index}
              className="card mr-2 "
              style={{
                marginRight: "16px",
                marginBottom: "16px",
                flex: "1 1 calc(25% - 16px)",
              }}
            >
              {/* <Card country={data[index][col]} /> */}
              <Card
                country={filtered_data[index]?.country}
                name={filtered_data[index]?.name}
                alpha_two_code={filtered_data[index]?.alpha_two_code}
                state_province={
                  filtered_data[index] && filtered_data[index]["state-province"]
                }
              />
            </div>
          );
        }
        return cards;
      }
    }
  };

  return (
    <div>
      {/* final div */}
      <div
        className="flex"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ margin: "12px" }}>
          <label htmlFor="dropdown1">Country:</label>
          <select
            id="dropdown1"
            value={selectedOption1}
            onChange={handleSelectChange1}
          >
            <option value="">Select an option</option>
            <option value="PK">Pakistan</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
          </select>
        </div>
        <div style={{ margin: "12px" }}>
          <label htmlFor="dropdown2">Dropdown 2:</label>
          <select
            id="dropdown2"
            value={selectedOption2}
            onChange={handleSelectChange2}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div style={{ margin: "12px" }}>
          <label htmlFor="dropdown3">Dropdown 3:</label>
          <select
            id="dropdown3"
            value={selectedOption3}
            onChange={handleSelectChange3}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      {/*  cards diaplay*/}
      <div
        className=""
        style={{ display: "flex", flexWrap: "wrap", paddingLeft: "40px" }}
      >
        {display()}
      </div>

      {/* final div */}
    </div>
  );
};

export default Task;
