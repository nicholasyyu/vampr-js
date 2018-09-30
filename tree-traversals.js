class Employee {

  // ... prev code here

  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  get totalEmployees() {

    let totalEmployees = 0; // 1

    // Use depth first traversal to calculate the total employees

    return totalEmployees;

  }
}

let wealthyEmployees = ada.employeesThatMakeOver(418401);