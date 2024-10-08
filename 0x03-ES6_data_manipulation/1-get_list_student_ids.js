/**
 * Returns ids from a list of students
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - List of students.
 * @author Derrick Enam Azameti <https://github.com/derrick-enam-azameti>
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
