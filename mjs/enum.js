var STATUS;
(function (STATUS) {
    STATUS[STATUS["CREATED"] = 100] = "CREATED";
    STATUS[STATUS["PROCESS"] = 900] = "PROCESS";
    STATUS[STATUS["FINISH"] = 500] = "FINISH";
})(STATUS || (STATUS = {}));
let todoStatus = STATUS.PROCESS;
console.log(todoStatus);
