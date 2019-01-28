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

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects(){
        for(let i in this.favSubjects){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a Pull Request for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun their Sprint Challenge on ${subject}`;
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
    favSubjects: ['CSS', 'Javascript']
});

const Carlos = new ProjectManager({
    name: 'Carlos Lantigua',
    location: 'North Carolina',
    age: 00,
    gender: 'male',
    favLanguage: ['Javascript','Python','SQL','Java'],
    specialty: 'JavaScript',
    catchPhrase: '.this is amazing!',
    grandClassName: 'WEBPT',
    favInstructor: 'Cam Pope'
});

console.log(Carlos.name); // 'Carlos Lantigua'
console.log(Cam.specialty); // 'Back-end'
console.log(Cam.grade(Cory, 'JavaScript')); //`Cory Rawlinson receives a perfect score on JavaScript`
console.log(Carlos.speak()); //`Hello my name is Carlos Lantigua and I live in North Carolina`
console.log(Cory.listsSubjects()); // 'CSS' 'Javascript'
console.log(Cory.previousBackground); // 'Cinematography'
console.log(Carlos.favInstructor)// 'Cam Pope'
console.log(Carlos.debugsCode(Cory, 'Python'))// `Carlos Lantigua debugs Cory Rawlinson's code on Python`