export const ValidateData = (email, password) => {
    // Email regex
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    
    // Password regex to ensure at least one uppercase, one lowercase, one digit, and at least 8 characters
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  
    if (!isEmailValid) return "Email Id is not Valid";
    if (!isPasswordValid) return "Password is not Valid";
  
    return null;
  };
  