// --- Dependencies from Task 1 ---

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// --- Task 2: Functions ---

/**
 * Type predicate function to check if an employee is a Director.
 * @param employee - The employee (Director or Teacher) to check.
 * @returns true if the employee is a Director, false otherwise.
 */
function isDirector(employee: Director | Teacher): employee is Director {
  // We can use 'instanceof' because we are working with classes.
  // This is a reliable way to check the type at runtime.
  return employee instanceof Director;
}

/**
 * Executes the appropriate work tasks based on the employee's type.
 * @param employee - The employee (Director or Teacher) who will work.
 */
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    // Because of the 'isDirector' type predicate,
    // TypeScript knows 'employee' is a Director here.
    console.log(employee.workDirectorTasks());
  } else {
    // TypeScript knows 'employee' must be a Teacher here.
    console.log(employee.workTeacherTasks());
  }
}

// --- Expected Results (Test Cases) ---

console.log('Testing with salary 200:');
// createEmployee(200) returns a Teacher
// executeWork(Teacher) calls workTeacherTasks()
executeWork(createEmployee(200)); // Expected: Getting to work

console.log('\nTesting with salary 1000:');
// createEmployee(1000) returns a Director
// executeWork(Director) calls workDirectorTasks()
executeWork(createEmployee(1000)); // Expected: Getting to director tasks




// --- Base Classes and Interfaces (from Task 1) ---

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): void; // Changed to void to match console.log expectation
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): void; // Changed to void to match console.log expectation
}

class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  
  /**
   * Logs the director's tasks to the console.
   */
  workDirectorTasks = () => console.log('Getting to director tasks');
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';

  /**
   * Logs the teacher's tasks to the console.
   */
  workTeacherTasks = () => console.log('Getting to work');
}

/**
 * Creates an employee (either Teacher or Director) based on salary.
 * @param salary - The salary of the employee (number or string).
 * @returns An instance of Teacher if salary < 500, otherwise Director.
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}








// --- Task 2: Functions specific to employees ---

/**
 * Type alias for the employee union type.
 */
type Employee = Director | Teacher;

/**
 * Type predicate to check if an employee is a Director.
 * @param employee - The employee to check (Director | Teacher).
 * @returns True if the employee is a Director, false otherwise.
 */
function isDirector(employee: Employee): employee is Director {
  // We can check if the 'workDirectorTasks' method exists on the object.
  // This is a reliable way to distinguish Director from Teacher.
  return (employee as Director).workDirectorTasks !== undefined;

  // Alternatively, if we are sure we are working with class instances:
  // return employee instanceof Director;
}

/**
 * Executes the appropriate work task based on the employee's type.
 * @param employee - The employee (Director | Teacher) to execute work for.
 */
function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    // The compiler now knows 'employee' is of type Director
    employee.workDirectorTasks();
  } else {
    // The compiler knows 'employee' must be of type Teacher
    employee.workTeacherTasks();
  }
}

// --- Expected Result ---

console.log('Testing with salary 200 (should be Teacher):');
executeWork(createEmployee(200));

console.log('Testing with salary 1000 (should be Director):');
executeWork(createEmployee(1000));
