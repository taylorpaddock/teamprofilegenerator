const Intern = require("../lib/Intern");

describe("Intern Class which is a subclass of Employee", () => {
     
    it("should create a new Intern object", () => {
          const eng = new Intern("Taylor", "88", "test@gmail.com", "UW");
          expect(eng.name).toBe("Taylor");
          expect(eng.id).toBe("88");
          expect(eng.email).toBe("test@gmail.com");
          expect(eng.school).toBe("UW");
     });

    it("should get the employee Name", () => {
          const eng = new Intern("Taylor", "88", "test@gmail.com", "UW");
          expect(eng.getName()).toBe("Taylor");
     });

    it("should get the employee ID", () => {
          const eng = new Intern("Taylor", "88", "test@gmail.com", "UW");
          expect(eng.getID()).toBe("88");
     });

     it("should get the employee email", () => {
          const eng = new Intern("Taylor", "88", "test@gmail.com", "UW");
          expect(eng.getEmail()).toBe("test@gmail.com");
     });

     it("should get the employee school", () => {
          const eng = new Intern("Taylor", "88", "test@gmail.com", "UW");
          expect(eng.getSchool()).toBe("UW");
     });

     it("should get the employee role", () => {
          const eng = new Intern("Taylor", "88", "test@gmail.com", "UW");
          expect(eng.getRole()).toBe("Intern");
     });
   
});