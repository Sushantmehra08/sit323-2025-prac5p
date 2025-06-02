const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Calculator microservice is running. Use /add?num1=5&num2=10');
});

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 + num2;
    console.log(`Calculated: ${num1} + ${num2} = ${result}`);
    res.json({ result });
});

app.listen(3000, () => {
    console.log('Calculator microservice running at http://localhost:3000');
});