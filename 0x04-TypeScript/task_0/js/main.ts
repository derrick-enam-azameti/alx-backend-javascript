export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentA: Student = {
  firstName: "Moses",
  lastName: "Ayari",
  age: 25,
  location: "Mauritius",
};
const studentB: Student = {
  firstName: "Maxwell",
  lastName: "Mensah-Koowa",
  age: 22,
  location: "Accra, Ghana",
};

const studentsList: Array<Student> = [
  studentA,
  studentB,
];
const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
    margin: 15%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid black;
    cursor: pointer;
  }
  td:hover {
    background: blue;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 * @author Derrick E. Azameti <https://github.com/derrick-enam-azameti>
 */
export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
  tableHead.insertAdjacentElement('beforeend', headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
