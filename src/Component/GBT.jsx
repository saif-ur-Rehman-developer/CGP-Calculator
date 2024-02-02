import React, { useState } from 'react';
import '../Component/GBT.scss';
const GPA_CALCULATOR = {
  'A+': 4.3,
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1.0,
  'D-': 0.7,
  'F': 0.0
};

const GradeInput = ({ label, grade, creditHours, onGradeChange, onCreditHoursChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={grade} onChange={(e) => onGradeChange(e.target.value)}>
        <option value="">Select Grade</option>
        {Object.keys(GPA_CALCULATOR).map((gradeValue) => (
          <option key={gradeValue} value={gradeValue}>{gradeValue}</option>
        ))}
      </select>
      <input type="number" placeholder="Credit Hours" value={creditHours} onChange={(e) => onCreditHoursChange(e.target.value)} />
    </div>
  );
};

const Calculator = () => {
  const [grades, setGrades] = useState({
    subject1: { grade: '', creditHours: '' },
    subject2: { grade: '', creditHours: '' },
    subject3: { grade: '', creditHours: '' },
    subject4: { grade: '', creditHours: '' },
  });

  const [gpa, setGPA] = useState(0);

  const calculateGPA = () => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    Object.values(grades).forEach(subject => {
      const gradePoint = GPA_CALCULATOR[subject.grade] || 0;
      const creditHours = parseFloat(subject.creditHours) || 0;

      totalGradePoints += gradePoint * creditHours;
      totalCreditHours += creditHours;
    });

    const gpaValue = totalCreditHours !== 0 ? totalGradePoints / totalCreditHours : 0;
    setGPA(gpaValue.toFixed(2));
  };

  const addSubject = () => {
    if (Object.keys(grades).length < 9) {
      const subjectKey = `subject${Object.keys(grades).length + 1}`;
      setGrades({ ...grades, [subjectKey]: { grade: '', creditHours: '' } });
    } else {
      alert("You cannot add more than 9 subjects.");
    }
  };

  return (

    <div  className='MainLogic'>
      {Object.keys(grades).map(subject => (
        <GradeInput
          key={subject}
          label={`Subject ${subject.charAt(subject.length - 1)}`}
          grade={grades[subject].grade}
          creditHours={grades[subject].creditHours}
          onGradeChange={(value) => setGrades({ ...grades, [subject]: { ...grades[subject], grade: value } })}
          onCreditHoursChange={(value) => setGrades({ ...grades, [subject]: { ...grades[subject], creditHours: value } })}
        />
      ))}
      <div className="buttons">

      <button onClick={addSubject}>Add Subject</button>
      <button onClick={calculateGPA}>Calculate GPA</button>
      </div>
      <div className='FinalGPA'>
        <strong>GPA: </strong> {gpa}
      </div>
    </div>
  );
};

export default Calculator;
