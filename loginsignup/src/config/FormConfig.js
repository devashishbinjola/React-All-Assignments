const formConfig = {
    signup: [
      { name: "firstName", label: "First Name", type: "text", required: true, minLength: 2, maxLength: 30 },
      { name: "lastName", label: "Last Name", type: "text", required: true, minLength: 2, maxLength: 30 },
      { name: "phone", label: "Phone No", type: "number", required: true, pattern: /^[0-9]{10}$/ },
      { name: "email", label: "Email ID", type: "email", required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { name: "gender", label: "Gender", type: "radio", options: ["Male", "Female"], required: true },
      { name: "state", label: "State", type: "select", options: ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore"], required: true },
      { name: "address", label: "Address", type: "textarea", maxLength: 100 },
      { name: "password", label: "Password", type: "password", required: true, minLength: 6, maxLength: 20 },
      { name: "confirmPassword", label: "Confirm Password", type: "password", required: true, match: "password" },
      { name: "terms", label: "I agree to the Terms & Conditions", type: "checkbox", required: true }
    ],

    login: [
        { name: "email", label: "Email ID", type: "email", required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        { name: "password", label: "Password", type: "password", required: true, minLength: 6, maxLength: 20 }
      ]
  };
  
  export default formConfig;