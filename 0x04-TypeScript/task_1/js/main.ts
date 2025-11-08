// Define the Teacher interface
// It includes mandatory properties and allows for additional, unspecified properties.
// ["interface Director extends Teacher"]
interface Teacher {
  readonly firstName: string; // firstName can only be set during initialization
  readonly lastName: string;  // lastName can only be set during initialization
  fullTimeEmployee: boolean; // This attribute must always be defined
  yearsOfExperience?: number; // This attribute is optional
  location: string;          // This attribute must always be defined
  [key: string]: any;        // This index signature allows for any additional properties
                             // (e.g., 'contract') with any value type.
                             // Using 'any' here for simplicity as per the example,
                             // but 'unknown' could be used for stricter type checking.
}

// Example usage of the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',



  
  contract: false, // This is an additional property not explicitly defined in the interface
};

// Log the teacher3 object to the console
console.log(teacher3);

// You can also create another teacher with yearsOfExperience
const teacher4: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
};

console.log(teacher4);

// Attempting to modify readonly properties will result in a TypeScript error:
// teacher3.firstName = 'Jonathan'; // Error: Cannot assign to 'firstName' because it is a read-only property.
// "interface Director extends Teacher"
// ["interface Director extends Teacher"]
