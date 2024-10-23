export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return "Email is required";
  } else if (!emailRegex.test(email)) {
    return "Invalid email address";
  }
  return "";
};

export const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  } else if (password.length < 5) {
    return "Password must be at least 5 characters long";
  }
  return "";
};

export const validateUsername = (username) => {
  if (!username) {
    return "Username is required";
  }
  return "";
};
