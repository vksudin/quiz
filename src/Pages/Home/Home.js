import React from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import {Button} from "@mui/material";
import "./Home.css";
import Categories from "../../Data/Categories";
import { useState } from "react";
const Home = ({name,setName}) => {



  const [category,setCategory]=useState("");
  const [difficulty,setDifficulty]=useState("");
  const [error, setError] = useState(false);

 const handleSubmit=()=>{
  
 };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your full name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="select category"
            style={{ marginBottom: 30 }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
          >
          {
            Categories.map((cat)=>(
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))
          }
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
         <Button variant="contained" color="primary" onClick={handleSubmit}>
          Let's Start Quiz
         </Button>
        </div>
      </div>
      <img src="./quiz.svg" className="banner" alt="quiz time" />
    </div>
  );
};
export default Home;
