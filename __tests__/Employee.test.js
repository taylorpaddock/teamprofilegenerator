const Employee = require("../lib/Employee");

describe("Employee Class", () => {
     
    it("should create a new employee object", () => {
          const emp = new Employee("Taylor", "88", "test@gmail.com");
          expect(emp.name).toBe("Taylor");
          expect(emp.id).toBe("88");
          expect(emp.email).toBe("test@gmail.com");
    });

    it("should get the employee Name", () => {
          const emp = new Employee("Taylor", "88", "test@gmail.com");
          expect(emp.getName()).toBe("Taylor");
    });

    it("should get the employee ID", () => {
          const emp = new Employee("Taylor", "88", "test@gmail.com");
          expect(emp.getID()).toBe("88");
    });

    it("should get the employee email", () => {
          const emp = new Employee("Taylor", "88", "test@gmail.com");
          expect(emp.getEmail()).toBe("test@gmail.com");
    });

    it("should get the employee role", () => {
          const emp = new Employee("Taylor", "88", "test@gmail.com");
          expect(emp.getRole()).toBe("Employee");
    });
   
});