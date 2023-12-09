const axios = require("axios");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const allOperation = ['+', '-', '*', '/'];

function performOperation() {
    rl.question('Выберите математическую операцию (+, -, *, /) или введите "q" для выхода: ', (typeOperation) => {  
        if (typeOperation.toLowerCase() === "q") {
            rl.close();
            return;
        }
        if (allOperation.includes(typeOperation)) {
            rl.question('Введите первое число: ', (num1) => {
                rl.question('Введите второе число: ', (num2) => {

                    console.log(num1, typeOperation, num2, ' = ');

                    const data = {
                        jsonrpc: "2.0",
                        id: 0,
                        method: typeOperation,
                        param1: num1,
                        param2: num2,
                    };

                    (async () => {
                        const response = await axios.post(`http://localhost:8080/json-rpc`, data)
                        console.log(response.data.result)
                        performOperation(); 
                    })();   
                });
            });
        } else {
            console.log('Неверная операция.');
            performOperation(); 
        }
    })
}

performOperation(); 