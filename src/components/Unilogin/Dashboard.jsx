import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import universitiesData from '../pricing/uni.json';
import Back from '../common/back/Back';

const Dashboard = () => {
  const { id } = useParams();
  const [faculty, setFaculty] = useState(findFacultyById(id));
  const [newDegree, setNewDegree] = useState('');
  const [degreeToRemove, setDegreeToRemove] = useState('');

  const handleAddDegree = () => {
    if (newDegree.trim() !== '') {
      const updatedData = { ...universitiesData };
      const facultyToUpdate = findFacultyById(id);
  
      if (facultyToUpdate) {
        facultyToUpdate.degrees.push(newDegree);
        setFaculty(prevFaculty => ({
          ...prevFaculty,
          degrees: [...prevFaculty.degrees, newDegree]
        }));
        
        // Update the JSON data
        updatedData[id].Faculties[facultyToUpdate.faculty_name].degrees.push(newDegree);
        // Here you can save the updatedData to your backend or wherever your data is stored
      }
      setNewDegree('');
    }
  };
  
  const handleRemoveDegree = () => {
    if (degreeToRemove.trim() !== '') {
      const updatedData = { ...universitiesData };
      const facultyToUpdate = findFacultyById(id);
  
      if (facultyToUpdate) {
        const updatedDegrees = facultyToUpdate.degrees.filter(degree => degree !== degreeToRemove);
        facultyToUpdate.degrees = updatedDegrees;
        setFaculty(prevFaculty => ({
          ...prevFaculty,
          degrees: updatedDegrees
        }));
        
        // Update the JSON data
        updatedData[id].Faculties[facultyToUpdate.faculty_name].degrees = updatedDegrees;
        // Here you can save the updatedData to your backend or wherever your data is stored
      }
      setDegreeToRemove('');
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the modified faculty data to your backend or update the database directly
    console.log("Modified Faculty Data:", faculty);
  };

  const handleChange = (event) => {
    setNewDegree(event.target.value);
  };

  const handleInputChange = (event) => {
    setDegreeToRemove(event.target.value);
  };

  const updateUniJson = (updatedFaculty) => {
    // This is just a demonstration and should not be used in production
    // In a real application, you would send this data to your backend to update the database
    const updatedData = {
      ...universitiesData,
      [updatedFaculty.university_id]: {
        ...universitiesData[updatedFaculty.university_id],
        Faculties: {
          ...universitiesData[updatedFaculty.university_id].Faculties,
          [updatedFaculty.Id]: updatedFaculty
        }
      }
    };
    // Update the state of universitiesData
    universitiesData[updatedFaculty.university_id].Faculties[updatedFaculty.Id] = updatedFaculty;
    // Update the JSON file (Note: This is not recommended in a real application)
    // This is just for demonstration purposes and won't work in a real application due to browser restrictions
    localStorage.setItem('uniData', JSON.stringify(updatedData));
  };

  if (!faculty) {
    return <div>Faculty not found</div>;
  }

  return (
    <div>
      <Back title={`Welcome to ${faculty.faculty_name}'s Dashboard`} />
      <h3>Degrees:</h3>
      <ul>
        {faculty.degrees.map((degree, idx) => (
          <li key={idx}>{degree}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Add Degree:
          <input type="text" value={newDegree} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleAddDegree}>Add</button>
      </form>
      <form onSubmit={handleSubmit}>
        <label>
          Remove Degree:
          <select value={degreeToRemove} onChange={handleInputChange}>
            <option value="">Select a degree to remove</option>
            {faculty.degrees.map((degree, idx) => (
              <option key={idx} value={degree}>{degree}</option>
            ))}
          </select>
        </label>
        <button type="button" onClick={handleRemoveDegree}>Remove</button>
      </form>
      <button type="submit">Save Changes</button>
    </div>
  );
};

const findFacultyById = (id) => {
  for (const university of Object.values(universitiesData)) {
    for (const faculty of Object.values(university.Faculties)) {
      if (faculty.Id === id || faculty.link === id) {
        return faculty;
      }
    }
  }
  return null;
};

export default Dashboard;
