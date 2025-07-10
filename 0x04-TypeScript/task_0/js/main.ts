interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}



const student_1: Student = {
  firstName: Khalil,
  lastName: Ahmed,
  age: 45,
  location: Asyut,
};

const student_2: Student = {
  firstName: Ahmed,
  lastName: Ali,
  age: 22,
  location: Cairo,
};

const studentsList: Student[] = [student_1, student_2];




document.addEventListener(DOMContentLoaded, () => {
  // Get the body element to append the table
  const body: HTMLBodyElement = document.getElementsByTagName(body)[0];

  // Create the table element
  const table: HTMLTableElement = document.createElement(table);

  // Create the table header
  const thead: HTMLTableSectionElement = document.createElement(thead);
  const headerRow: HTMLTableRowElement = document.createElement(tr);
  const thFirstName: HTMLTableCellElement = document.createElement(th);
  thFirstName.textContent = First Name;
  const thLocation: HTMLTableCellElement = document.createElement(th);
  thLocation.textContent = Location;

  headerRow.appendChild(thFirstName);
  headerRow.appendChild(thLocation);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the table body
  const tbody: HTMLTableSectionElement = document.createElement(tbody);

  // Loop through the studentsList and append a new row for each student
  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement(tr);

    const firstNameCell: HTMLTableCellElement = document.createElement(td);
    firstNameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = document.createElement(td);
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Append the table to the body
  body.appendChild(table);
});

