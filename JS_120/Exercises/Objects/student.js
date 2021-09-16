function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    listCourses() {
      console.log(this.courses);
    },

    addCourse(object) {
      this.courses.push(object);
    },
  
    addNote(code, note) {
      this.courses.forEach(obj => {
        for (let prop in obj) {
          if (obj[prop] === code) {
            obj.note ? obj.note += `; ${note}` : obj.note = note;
          }
        }
      })
    },
  
    viewNotes() {
      this.courses.forEach(obj => {
        if (obj.note) {
          console.log(`${obj.name}:`, obj.note);
        }
      })
    },
  
    updateNote(code, note) {
      this.courses.forEach(obj => {
        for (let prop in obj) {
          if (obj[prop] === code) {
            obj.note = note;
          }
        }
      })
    },
  
    info() {
      console.log(`${this.name} is a ${this.year} student.`);
    },
  };
}


let foo = createStudent('Foo', '1st');
foo.info();
//"Foo is a 1st year student"
foo.listCourses();
//[];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
//[{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
//"Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
//"Math: Fun course; Remember to study for algebra"
//"Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
//"Math: Fun course"
//"Advanced Math: Difficult subject"