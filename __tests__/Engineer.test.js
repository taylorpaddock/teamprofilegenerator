const Engineer = require("../lib/Engineer");

describe("Engineer Class which is a subclass of Employee", () => {
     
    it("should create a new Engineer object", () => {
          const eng = new Engineer("Taylor", "88", "test@gmail.com", "githubprofile");
          expect(eng.name).toBe("Taylor");
          expect(eng.id).toBe("88");
          expect(eng.email).toBe("test@gmail.com");
          expect(eng.github).toBe("githubprofile");
     });

    it("should get the employee Name", () => {
          const eng = new Engineer("Taylor", "88", "test@gmail.com", "githubprofile");
          expect(eng.getName()).toBe("Taylor");
     });

    it("should get the employee ID", () => {
          const eng = new Engineer("Taylor", "88", "test@gmail.com", "githubprofile");
          expect(eng.getID()).toBe("88");
     });

     it("should get the employee email", () => {
          const eng = new Engineer("Taylor", "88", "test@gmail.com", "githubprofile");
          expect(eng.getEmail()).toBe("test@gmail.com");
     });

     it("should get the employee github ID", () => {
          const eng = new Engineer("Taylor", "88", "test@gmail.com", "githubprofile");
          expect(eng.getGithub()).toBe("githubprofile");
     });

     it("should get the employee role", () => {
          const eng = new Engineer("Taylor", "88", "test@gmail.com", "githubprofile");
          expect(eng.getRole()).toBe("Engineer");
     });
   
});