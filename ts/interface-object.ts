let objOne: any = {};

console.log(objOne);

interface CourseInterface {
    name: string;
    time: string;
    free?: boolean
}

let objTwo: CourseInterface;

objTwo = {
    name: "es6",
    time: "5h"
};

console.log(objTwo);

let objThree: CourseInterface = {
    name: "Typescript",
    time: "10h",
    free: false
};

console.log(objThree);
