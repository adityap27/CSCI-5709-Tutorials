export function validateName(name, fieldName) {
  const onlyLettersRegex = /^[A-Za-z]+$/;

  if (name === "") {
    return [false, fieldName + " should not be empty!"];
  } else if (!onlyLettersRegex.test(name)) {
    return [false, fieldName + " should only contain letters!"];
  } else {
    return [true, ""];
  }
}

export function validateEmail(email) {
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email === "") {
    return [false, "Email should not be empty!"];
  } else if (!validEmailRegex.test(email)) {
    return [false, "Email address is not valid!"];
  } else {
    return [true, ""];
  }
}

export function validatePassword(password) {
  // validate minimum length
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  if (!passwordRegex.test(password)) {
    return [
      false,
      "Password: minimum length should be 8 characters, have at least 1 upper case letter, 1 lower case letter, 1 digit and 1 special character!",
    ];
  } else {
    return [true, ""];
  }
}
