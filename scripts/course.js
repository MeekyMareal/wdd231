const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const subjectList = document.querySelector("#lisOfCourses");
const totalCredits = document.querySelector("#showCredits");

function createCourseCards(filteredCourses) {
    subjectList.innerHTML = "";

    filteredCourses.forEach(course => {
        const card = document.createElement("h3");
        card.classList.add("card-list");
        card.textContent = `${course.subject} ${course.number}`;

        if (course.completed) {
            card.classList.add("finished");
        }

        subjectList.appendChild(card);
    });

    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = `The total credits for course listed above is ${total}`;
}

createCourseCards(courses);

const allActive = document.querySelector("#all");
const allCse  = document.getElementById("cse");
const allWdd = document.querySelector("#wdd");

allActive.addEventListener("click", () => {
    allActive.classList.add("active");
    allCse.classList.remove("active");
    allWdd.classList.remove("active");
    createCourseCards(courses);
});

allCse.addEventListener("click", () => {
    allCse.classList.add("active");
    allActive.classList.remove("active");
    allWdd.classList.remove("active");
    createCourseCards(courses.filter(course => course.subject === "CSE"));
});

allWdd.addEventListener("click", () => {
    allWdd.classList.add("active");
    allActive.classList.remove("active");
    allCse.classList.remove("active");
    createCourseCards(courses.filter(course => course.subject === "WDD"));
});

allActive.classList.add("active")

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
