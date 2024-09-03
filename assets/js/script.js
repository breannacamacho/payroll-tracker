// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Initialize an array to store employee data
const employeesArray = [];

// Function to collect employee data
const collectEmployees = function () {
  let keepGoing = true;
  
  // Loop to collect employee data until the user decides to stop
  while (keepGoing) {
    // Prompt user for employee information
    const firstName = prompt("Please enter the employee's first name");
    const lastName = prompt("Please enter the employee's last name");
    let salary = prompt("Please enter the employee's salary");

    // Create an employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    };

    // Add the employee object to the employeesArray
    employeesArray.push(employee);

    // Ask user if they want to add another employee
    keepGoing = confirm("Would you like to add another employee?");
    // "OK" returns true, "Cancel" returns false
  }
  
  // Return the array of employee objects
  return employeesArray;
};

// Log the array of employees to the console
console.log(employeesArray);

// Function to display the average salary of employees
const displayAverageSalary = function (employeesArray) {
  let avTotal = 0;
  const numberEmployees = employeesArray.length;

  // Calculate total salary
  for (const employee of employeesArray) {
    avTotal += employee.salary;
  }

  // Calculate average salary
  const avgSalary = avTotal / numberEmployees;
  console.log(`Your employees have an average salary of ${avgSalary.toFixed(2)} dollars!`);
};

// Function to select and display a random employee
const getRandomEmployee = function(employeesArray) {
  // Select a random employee from the array
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector("#employee-table");
  
    // Clear the employee table
    employeeTable.innerHTML = "";
  
    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];
  
      const newTableRow = document.createElement("tr");
  
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);
  
      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);
  
      const salaryCell = document.createElement("td");
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
  
      newTableRow.append(salaryCell);
  
      employeeTable.append(newTableRow);
    }
  };
  
  const trackEmployeeData = function () {
    const employees = collectEmployees();
  
    console.table(employees);
  
    displayAverageSalary(employees);
  
    console.log("==============================");
  
    getRandomEmployee(employees);
  
    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });
  
    displayEmployees(employees);
  };
  
  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener("click", trackEmployeeData);