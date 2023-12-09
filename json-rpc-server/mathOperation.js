const allOperation = ['+', '-', '*', '/'];

function selectOperation(typeOperation) {
    let operation = allOperation.find(operation => typeOperation == operation)

    if (operation && operation.length == 1) {
        return function (a, b) {
            return eval("a " + operation + " b")  
        }
    } else
        throw new Error("Неверный операнд выражения.");
}

module.exports = {
    selectOperation: selectOperation,
    allOperation: allOperation
};