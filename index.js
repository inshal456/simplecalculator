import inquirer from "inquirer";
const answer = await inquirer.prompt([{ messege: "enter firstNumber", type: "number", name: "firstnumber"},
    { messege: "enter second number", type: "number", name: "secondNumber" },
    { messege: "select one of the operator to perform action", type: "list", name: "operators",
        choices: ["addition", "substraction", "multiplication", "division"] }
]);
if (answer.operators === "addition") {
    console.log(+answer.firstnumber + answer.secondNumber);
}
else if (answer.operators === "substraction") {
    console.log(answer.firstnumber - answer.secondNumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstnumber * answer.secondNumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstnumber / answer.secondNumber);
}
else {
    console.log("please select valid operation");
}
