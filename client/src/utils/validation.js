export const registerValidation = (values) => {
  let validationErrors = {};
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const imgUrlRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
  if (values.username === "") {
    validationErrors.username = "Username is required!";
  } else if (values.username.length < 3) {
    validationErrors.username =
      "Username has to be at least 3 characters long!";
  }

  if (values.email === "") {
    validationErrors.email = "Email is required!";
  } else if (!emailRegex.test(values.email)) {
    validationErrors.email = "Please enter a valid email!";
  }

  if (values.imgUrl === "") {
    validationErrors.imgUrl = "image Url is required!";
  } else if (!imgUrlRegex.test(values.imgUrl)) {
    validationErrors.imgUrl = "Please enter a valid image Url!";
  }

  if (values.password === "") {
    validationErrors.password = "Password is required!";
  } else if (values.password.length < 3) {
    validationErrors.password =
      "Password has to be at least 3 characters long!";
  }

  if (values.password !== values.repass) {
    validationErrors.repass = "Password don`t match";
  }

  return validationErrors;
};

export const loginValidation = (values) => {
  let validationErrors = {};

  if (values.email === "") {
    validationErrors.email = "Email is required";
  }
  if (values.password === "") {
    validationErrors.password = "Password is required";
  }

  return validationErrors;
};
