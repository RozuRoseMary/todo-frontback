export function validateRegister(input) {
  const err = {};

  if (!input.username) {
    err.username = "username is require";
  }
  if (!input.email) {
    err.email = "email is require";
  }
  if (!input.password) {
    err.password = "password is require";
  }
  if (input.password == "      ") {
    err.password = "password is invalid";
  }
  if (input.password.length < 6) {
    err.password = "password must be at least 6 characters";
  }
  if (input.password !== input.confirmPassword) {
    err.confirmPassword = "password is not match";
  }
  // if (!input.confirmPassword) {
  //   err.confirmPassword = "confirmPassword is require";
  // }
  return err;
}

export function validateLogin(input) {
  const err = {};

  if (!input.username) {
    err.username = "username is require";
  }

  if (!input.password) {
    err.password = "password is require";
  }

  return err;
}
