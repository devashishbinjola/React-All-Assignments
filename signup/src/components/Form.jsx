import React, { useEffect, useState } from 'react'
import '../CSS/Form.css'; 

const Form = () => {
  let initialValues={
    fname:"",
    lname:"",
    phn:"",
    email:"",
    gender:"",
    state:"",
    address:"",
    password:"",
    conPassword:"",
    termsAndCondition:false
  }
  const[formData,setFormdata]=useState(
    initialValues
  )
  
  const[errors,setErrors]=useState(
    initialValues
  )
  useEffect(()=>{
    if(Object.values(formData).some(value => value !== "" && value !==false)){
    localStorage.setItem("formData",JSON.stringify(formData));
    }
  },[formData])



function handleInputchange(e){
  const value =e.target.value;
  setFormdata({
    ...formData,
    [e.target.name]:value
  });
  console.log(value);
  setErrors((prevErrors)=>({
    ...prevErrors,
    [e.target.name]:"",
  }));
}
function handleSubmit(e){
  e.preventDefault();
  if(validateForm()){
    alert("Successfully submitted");
    resetForm();
  }
  
}
function resetForm(){
setFormdata(initialValues);
setErrors({});
}
const validateForm=()=>{
  let validationError={};
  let isValid=true;
  if(formData.fname.length <2 || formData.fname.length>30){
    validationError.fname='First Name must be between 2 and 30';
    isValid=false;
  }
  if(formData.lname.length <2 || formData.lname.length>30){
    validationError.lname='Last Name must be between 2 and 30';
    isValid=false;
  }
  if(typeof(formData.phn)!==Number && formData.phn.length !=10){
    validationError.phn="Please enter 10 digits only";
    isValid=false;
  }
  if(!formData.email.includes("@")){
    validationError.email="Please enter valid Email address";
    isValid=false;
  }
  if(!formData.gender){
    validationError.gender="Please select the gender";
    isValid=false;
  }
  if(formData.state)
  if(formData.address.length>100){
    validationError.address="Max length of 100 exceeded"
    isValid=false;
  }
  if(formData.password.length<6 || formData.password.length>20){
    validationError.password="Password should be between 6 to 10";
    isValid=false;
  }
  if(formData.password !==formData.conPassword){
    validationError.conPassword="Password does not match";
    isValid=false;
  }
  if(!formData.termsAndCondition){
    validationError.termsAndCondition="Please accept the terms and conditions";
    isValid=false;
  }
  setErrors(validationError);
  return isValid;
}


  return (
    <div>
      <h1>Sign Up Form</h1>
      <form className='signupForm' onSubmit={handleSubmit}>
        <div className="columns">
        <label forHtml='fname'>First name</label>
        <div className="inputError">
        <input type='text' name='fname' value={formData.fname} onChange={handleInputchange} ></input>
        {errors.fname && <p>{errors.fname}</p>}
        </div>

        <div className="seperator"></div>
        
        <label forHtml='lname'>Last name</label>
        <div className="inputError">
        <input type='text' name='lname' value={formData.lname} onChange={handleInputchange}></input>
        {errors.lname && <p>{errors.lname}</p>}
        </div>
        
        </div>

        
        <label forHtml='phn'>Phone Number</label>
        <input type='number' name='phn' value={formData.phn} onChange={handleInputchange}></input>
        {errors.phn && <p>{errors.phn}</p>}

        <label forHtml='email'>Email</label>
        <input type='email' name='email' value={formData.email} onChange={handleInputchange}></input>
        {errors.email && <p>{errors.email}</p>}
        

        <label forHtml='gender'>
          Gender
        </label>
        <div className="gender-options" value={formData.gender} onChange={handleInputchange}>
        <label>
          <input type='radio' name='gender' value="Male" />
          Male
        </label>
        <label>
          <input type='radio' name='gender' value="Female" />
          Female
        </label>
        <label>
          <input type='radio' name='gender' value="Others" />
          Others
        </label>
        </div>
        {errors.gender && <p>{errors.gender}</p>}

        <label forHtml='state' >State</label>
        <select name='state' id='state' value={formData.state} onChange={handleInputchange}>
        <option name='state' value="select" >Select</option>

<option value="Haryana">Haryana</option>
<option value="Uttrakhand">Uttrakhand</option>
<option value="UP">UP</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Himachal Pardesh">Himachal Pardesh</option>

        </select>
        {errors.state && <p>{errors.state}</p>}

        <label forHtml='address'>Address</label>
        <textarea id='address
        ' name='address' value={formData.address} onChange={handleInputchange}></textarea>
        {errors.address && <p>{errors.address}</p>}

        <div className='columns'>
        <label forHtml='password'>Password</label>
        <div className="inputError">
        <input type='password' name='password' value={formData.password} onChange={handleInputchange}></input>
        {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="seperator"></div>

        <label forHtml='conPassword'>Confirm Password</label>
        <div className="inputError">
        <input type='password' name='conPassword' value={formData.conPassword} onChange={handleInputchange}></input>
        {errors.conPassword && <p>{errors.conPassword}</p>}
        </div>
        </div>


        <label>
          <input type='checkbox' name='termsAndCondition' value="termsAndCondition" onChange={handleInputchange}/>
          I accept terms and conditions
        </label>
        {errors.termsAndCondition && <p>{errors.termsAndCondition}</p>}
        
        <div className="btnDiv">
        <input className='button' type="submit"/>
        </div>
      </form>

      
    </div>
  )
}

export default Form
