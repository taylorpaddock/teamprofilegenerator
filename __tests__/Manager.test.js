const Manager = require("../lib/Manager");

describe("Manager Class which is a subclass of Employee", () => {
     
    it("should create a new Manager object", () => {
          const eng = new Manager("Taylor", "88", "test@gmail.com", "08");
          expect(eng.name).toBe("Taylor");
          expect(eng.id).toBe("88");
          expect(eng.email).toBe("test@gmail.com");
          expect(eng.office).toBe("08");
    });

    it("should get the employee Name", () => {
          const eng = new Manager("Taylor", "88", "test@gmail.com", "08");
          expect(eng.getName()).toBe("Taylor");
     });

    it("should get the employee ID", () => {
          const eng = new Manager("Taylor", "88", "test@gmail.com", "08");
          expect(eng.getID()).toBe("88");
    });

    it("should get the employee email", () => {
          const eng = new Manager("Taylor", "88", "test@gmail.com", "08");
          expect(eng.getEmail()).toBe("test@gmail.com");
    });

    it("should get the employee office number", () => {
          const eng = new Manager("Taylor", "88", "test@gmail.com", "08");
          expect(eng.getOffice()).toBe("08");
    });

    it("should get the employee role", () => {
          const eng = new Manager("Taylor", "88", "test@gmail.com", "08");
          expect(eng.getRole()).toBe("Manager");
    });
   
});