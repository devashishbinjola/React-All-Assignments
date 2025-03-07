import React, { useState } from 'react';
import '../CSS/SignUp.css'; 
import formConfig from '../config/FormConfig';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
 
  const initialValues = formConfig.signup.reduce((acc, field) => {
    acc[field.name] = field.type === "checkbox" ? false : "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

   
    setErrors({
      ...errors,
      [name]: ""
    });
  };

 
  const validateForm = () => {
    let validationErrors = {};
    let isValid = true;

    formConfig.signup.forEach((field) => {
      let value = formData[field.name] || ""; 

      if (field.type === "number") {
        value = value.toString(); 
      }

      
      if (field.required && !value) {
        validationErrors[field.name] = `${field.label} is required`;
        isValid = false;
      }

     
      if (field.minLength && value.length < field.minLength) {
        validationErrors[field.name] = `${field.label} must be at least ${field.minLength} characters`;
        isValid = false;
      }

      if (field.maxLength && value.length > field.maxLength) {
        validationErrors[field.name] = `${field.label} must be less than ${field.maxLength} characters`;
        isValid = false;
      }

   
      if (field.type === "email" && field.pattern && !field.pattern.test(value)) {
        validationErrors[field.name] = `Enter a valid email`;
        isValid = false;
      }

     
      if (field.name === "phone" && field.pattern && !field.pattern.test(value)) {
        validationErrors[field.name] = `Enter a valid 10-digit phone number`;
        isValid = false;
      }
    });

    setErrors(validationErrors);
    return isValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);

      let users = JSON.parse(localStorage.getItem("users")) || [];

      const isUserExists = users.some(user => user.email === formData.email);
      if(isUserExists){
        alert("THis email is already exists!");
        return;
      }

      
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));


      alert("Signup Successful!");

      setFormData({ ...initialValues }); 
      setErrors({});
      navigate("/login");
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      {formConfig.signup.map((field, index) => (
        <div key={index} className="form-group">
          {field.name !== "terms" ? <label className="form-label">{field.label}</label>:<></>}

         
          {["text", "email", "number", "password", "textarea"].includes(field.type) && (
            <input
              type={field.type}
              className="form-input"
              value={formData[field.name]}
              name={field.name}
              onChange={handleChange}
            />
          )}

    
          {field.type === "radio" &&
            field.options.map((option) => (
              <label key={option} className="radio-label">
                <input
                  type="radio"
                  value={option}
                  name={field.name}
                  checked={formData[field.name] === option} 
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}

      
          {field.type === "select" && (
            <select className="form-select" name={field.name} value={formData[field.name]} onChange={handleChange}>
              <option value="">Select {field.label}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}

      
          {field.type === "checkbox" && (<div className='checkbox-div'>
            <input
            type="checkbox"
            name={field.name}
            checked={formData[field.name]}
            onChange={handleChange}
          />
            <label className="checkbox-label">
              {field.label}
            </label>
            </div>
          )}

      
          {errors[field.name] && <p className="error-text">{errors[field.name]}</p>}
        </div>
      ))}

      <div className="btn-div">
      <button type="submit" className="btn">Submit</button>
      <button type="button" className="btn-login" onClick={()=> navigate("/login")}>Login </button>
      </div>
    </form>
  );
};

export default SignUp;
