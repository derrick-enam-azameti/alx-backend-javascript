/**
 * Contains the miscellaneous route handlers.
 * @author Derrick E. Azameti <https://github.com/derrick-enam-azameti>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
