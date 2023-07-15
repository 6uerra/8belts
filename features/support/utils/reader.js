const propertiesReader = require('properties-reader');

module.exports = class Credentials {

 readUserCredentials() {
  const properties = propertiesReader('features/config.properties');
  const username = properties.get('username');
  const password = properties.get('password');
  const url = properties.get('url');
  return {
    username,
    password,
    url
  };
  
}

}
