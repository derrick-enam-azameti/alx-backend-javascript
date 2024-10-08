/**
 * Returns students in a given location
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - List of students.
 * @param {String} city - The location.
 * @author Derrick Enam Azameti <https://github.com/derrick-enam-azameti>
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
