// 100 creates, 101 process, 102 finish

enum STATUS {
    CREATED = 100,
    PROCESS = 900,
    FINISH = 500
}

let todoStatus: STATUS = STATUS.PROCESS;

console.log(todoStatus);