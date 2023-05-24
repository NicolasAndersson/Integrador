const Validation = ({ email, password }, name) => {
  if (name === "email") {
    if (/\S+@\S+\.\S+/.test(email) && email.length <= 35) {
      return "";
    } else {
      return "Ingresa un email valido";
    }
  }

  if (name === "password") {
    if (password && /^(?=\w*\d)(?=\w*[a-z])\S{6,10}$/.test(password)) {
      return "";
    } else {
      return "Ingresa una password valida";
    }
  }
};

export { Validation };
