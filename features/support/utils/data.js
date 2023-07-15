module.exports = class Usuarios {
  constructor(nombre = '', apellido = '', email = '') {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }

  setUser(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }

  getUser() {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email
    };
  }
}
