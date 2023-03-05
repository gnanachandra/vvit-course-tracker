import {
  TextField,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  MenuItem,
  Button,
} from "@mui/material"
import React from "react";
import { useState } from "react";
import "./AddCourse.css";
import { AICTE_Courses, APSCHE_Courses, Sem } from "../Data/CourseNames";

const AddCourse = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rollNo: "",
    coursePlatform: "",
    courseName: "",
    Semester: "",
  });
  console.log(form);
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlePlatformChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/addCourse",{
      method:"POST",
      body: JSON.stringify(form),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })
    const body = await response.json();
    console.log(body);
  };
  return (
    <div className="addCourseForm">
      <form onSubmit={handleSubmit}>
        <TextField
          margin="dense"
          className="input"
          label="Name"
          variant="outlined"
          color="secondary"
          required
          type="text"
          name="name"
          size="small"
          onChange={handleFormChange}
        />{" "}
        
        <TextField
          label="Email"
          variant="outlined"
          color="secondary"
          required
          type="email"
          name="email"
          size="small"
          onChange={handleFormChange}
          margin="dense"
        />{" "}
        
        
        <FormLabel id="coursePlatform">Platform</FormLabel>
        <RadioGroup
          required
          name="coursePlatform"
          value={form.platform}
          onChange={handlePlatformChange}
        >
          <FormControlLabel control={<Radio />} label="AICTE" value="AICTE" />
          <FormControlLabel control={<Radio />} label="APSCHE" value="APSCHE" />
        </RadioGroup>
        
        <TextField
          label="Select Course"
          name="courseName"
          select
          value={form.courseName}
          fullWidth
          onChange={handleFormChange}
          required
        >
          {form.coursePlatform === "AICTE" &&
            AICTE_Courses.map((name) => {
              return (
                <MenuItem value={name} key={name}>
                  {name}
                </MenuItem>
              );
            })}
            {form.coursePlatform === "APSCHE" &&
            APSCHE_Courses.map((name) => {
              return (
                <MenuItem value={name} key={name}>
                  {name}
                </MenuItem>
              );
            })}

        </TextField>
        
        
        <TextField
          required
          label="Current Semester"
          name="Semester"
          select
          value={form.Semester}
          fullWidth
          onChange={handleFormChange}
        >
          {Sem.map((name) => {
            return (
              <MenuItem value={name} key={name}>
                {name}
              </MenuItem>
            );
          })}
        </TextField>

        <Button variant="contained" type="submit">
          Add Course
        </Button>
        
        
      </form>
    </div>
  );
};

export default AddCourse;
