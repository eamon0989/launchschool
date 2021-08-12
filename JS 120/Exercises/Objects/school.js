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

let school = {
  students: [],
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log(`Invalid Year`);
    }
  },

  enrollStudent(student, object) {
    student.addCourse(object);
  },

  addGrade: function(student, courseName, grade) {
    let course = student.listCourses().filter(course => {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(student) {
    student.courses.forEach(obj => {
      console.log(`${obj.name}: ${obj.grade || `In progress`}`);
    });
  },

  courseReport(course) {
    let sum = 0;
    let count = 0;
    this.students.forEach(obj => {
      let studentName = obj.name;
      if (obj.courses) {
        obj.courses.forEach(obj => {
          if (obj.name === course && obj.grade) {
            console.log(`${studentName}: ${obj.grade}`);
            sum += obj.grade;
            count += 1;
          }
        });
      }
    });
    if (count === 0) {
      console.log(undefined);
    } else {
      console.log(`---`);
      console.log(`Course Average: ${sum / count}`);
    }
  },
};

school.prototype = Object.assign(createStudent.prototype);

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
let foo = school.addStudent('foo', '3rd');
console.log(foo.courses);
foo.addCourse({ name: 'Math', code: 101, grade: 95, });
foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });
foo.addCourse({ name: 'Physics', code: 202, });
console.log(foo.courses);

let bar = school.addStudent('bar', '1st');
bar.addCourse({ name: 'Math', code: 101, grade: 91, });

let qux = school.addStudent('qux', '2nd');
qux.addCourse({ name: 'Math', code: 101, grade: 93, });
qux.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });

school.getReportCard(foo);
school.getReportCard(bar);
school.getReportCard(qux);

// school.courseReport('Math');
// school.courseReport('Advanced Math');
// school.courseReport('Physics');