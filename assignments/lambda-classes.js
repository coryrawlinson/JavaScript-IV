// CODE here for your Lambda Classes

class Person{
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.gender = personAttr.gender;
        this.location = personAttr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    editGrade(student) {
        let randomNumber = Math.random() * (10 - 1) + 1;
        let addOrSubtract = Math.random() * (2 - 1) + 1;
        if (addOrSubtract > 1.5) {
            student.grade -= randomNumber
            return student.grade;
        } else if (addOrSubtract < 1.5) {
            student.grade += randomNumber;
            return student.grade;
        }
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listsSubjects(){
        for(let i in this.favSubjects){
            if(i == this.favSubjects.length -1){
                return this.favSubjects[i];
              }
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a Pull Request for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun their Sprint Challenge on ${subject}`;
    }
    graduate(student){
        while(this.grade < 70){
            Cam.editGrade(student);
            if(this.grade > 70){
                return `${this.name} graduated from Lambda school with ${this.grade}%! Great job`
            }
        }
    }
}

class ProjectManager extends Instructor{
    constructor(CarlosAttrs){
        super(CarlosAttrs);
        this.grandClassName = CarlosAttrs.grandClassName;
        this.favInstructor = CarlosAttrs.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const Cam = new Instructor({
    name: 'Cam Pope',
    location: 'Lambda Uni',
    age: 00,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Tonight during our lecture,`
});

const Cory = new Student({
    name: 'Cory Rawlinson',
    location: 'Columbia, SC',
    age: 27,
    gender: 'male',
    previousBackground: 'Cinematography',
    className: "WEBPT4",
    favSubjects: ['CSS', 'Javascript'],
    grade: 40,
});

const Carlos = new ProjectManager({
    name: 'Carlos Lantigua',
    location: 'North Carolina',
    age: 00,
    gender: 'male',
    favLanguage: ['Javascript','Python','SQL','Java'],
    specialty: 'JavaScript',
    catchPhrase: 'This is amazing!',
    grandClassName: 'WEBPT',
    favInstructor: 'Cam Pope'
});

console.log(Carlos.name); // 'Carlos Lantigua'
console.log(Cam.specialty); // 'Back-end'
console.log(Cam.grade(Cory, 'JavaScript')); //`Cory Rawlinson receives a perfect score on JavaScript`
console.log(Carlos.speak()); //`Hello my name is Carlos Lantigua and I live in North Carolina`
console.log(Cory.listsSubjects()); // 'CSS' 'Javascript'
console.log(Cory.previousBackground); // 'Cinematography'
console.log(Carlos.favInstructor);// 'Cam Pope'
console.log(Carlos.debugsCode(Cory, 'Python'));// `Carlos Lantigua debugs Cory Rawlinson's code on Python`
console.log(Cam.editGrade(Cory)); // Will log 40 + or - a random number between 1-100 //this will be starting grade
console.log(Carlos.editGrade(Cory)); // Will log 40 + or - a random number between 1-100 //this will be starting grade
console.log(Cory.graduate(Cory)) //will go through a while loop until grade is > 70


