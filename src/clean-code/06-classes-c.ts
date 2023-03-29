(() => {
  // Definición de tipos
  type Gender = "M" | "F";

  interface PersonProps {
    birthday: Date;
    gender: Gender;
    name: string;
  }

  interface UserProps {
    email: string;
    role: string;
    person: Person;
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    user: User;
  }

  // No aplicamos el Principio de responsabilidad única
  // Definición de clases  ---------
  class Person {
    public birthday: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthday }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthday = birthday;
    }
  }

  class User extends Person {
    private lastAcces: Date;
    public email: string;
    public role: string;

    constructor({ email, role, person }: UserProps) {
      super(person);
      this.lastAcces = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder, user }: UserSettingsProps) {
      const { checkCredentials, email, role, ...person } = user;
      super({ email, role, person });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  // Construcción de objetos   --------------
  const person = new Person({
    name: "Nikodev",
    gender: "M",
    birthday: new Date("1989-01-09"),
  });

  const user = new User({
    email: "nikolas090189@gmail.com",
    role: "Admin",
    person: person,
  });

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    user,
  });

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });

  //   const person = new Person("Nikodev", "M", new Date("1989-01-09"));
  //   console.log({ person });
})();
