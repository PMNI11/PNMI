import React from 'react';
import universitiesData from '../pricing/uni.json';
import Back from '../common/back/Back';


const AllUniversityData = () => {
  console.log(universitiesData); // Log the imported data to console for debugging

  return (
    <div>
      <Back title="Choose The Right Path" />
      <ul>
        {Object.values(universitiesData).map((university, index) => (
          <div key={index}>
            <h3>{university.university_name}</h3>
            <ul>
              {Object.values(university.Faculties).map((faculty, facultyIndex) => (
                <li key={facultyIndex}>
                  <h4>{faculty.faculty_name}</h4>
                  <p>ID: {faculty.Id}</p>
                  {/* Add additional fields here as needed */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AllUniversityData;
