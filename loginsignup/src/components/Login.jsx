import React, { useState } from 'react';
import formConfig from '../config/FormConfig';
import '../CSS/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = ({currentUser,setCurrentUser}) => {
 
  const navigate = useNavigate();
  const initialValues = formConfig.login.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  
    const newErrors = { ...errors };
    delete newErrors[name]; 
    setErrors(newErrors);
  };


  const validateForm = () => {
    let validationErrors = {};
    let isValid = true;

    formConfig.login.forEach((field) => {
      let value = formData[field.name] || ""; 

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
    });

    setErrors(validationErrors);
    return isValid;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // alert("Successfully Logged In");
      setFormData({ ...initialValues });
      setErrors({});
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser =users.find(user => user.email === formData.email && user.password === formData.password);

    if(validUser){
      alert("Successfully Login!");
      localStorage.setItem("currentUser",JSON.stringify(validUser));

    }else{
      setErrors("Invalid email or password!");
    }
    const storedCurrentUSer = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(storedCurrentUSer);
    navigate("/");
   
  };

  return (
    
    <form className="signup-form" onSubmit={handleSubmit}>
      {formConfig.login.map((field, index) => (
        <div key={index} className="form-group">
          <label>{field.label}</label>
          {["email", "password"].includes(field.type) && (
            <input
              name={field.name}
              value={formData[field.name]}
              className="form-input"
              type={field.type}
              onChange={handleChange}
            />
          )}
          {errors[field.name] && <p className="error-text">{errors[field.name]}</p>}
        </div>
      ))}

      <button type="submit"className="submit-button" >Submit</button>
       <p className='form-footer'>Don't have Account? <Link to="/signup">Sign Up</Link></p>
    </form>
    
  );
};

export default Login;
