const express = require('express');
const app = express();

const { add,sub,multiply,divide }= require('./arithmeticFunctions');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.post('/calculate',(req,res)=>{
    const { operation,value_1,value_2} = req.body;

    var result;
    if(operation == 'add'){
        result = add(value_1,value_2);
        console.log(result)
    }else if(operation == 'sub'){
        result = sub(value_1,value_2);
    }else if(operation == 'multiply'){
        result = multiply(value_1,value_2);
    }else if(operation == 'divide'){
        result = divide(value_1,value_2);
    }
    else{
        console.log('Invalid Operation,Please use add,sub,multiply,divide operations')
    }
    res.json(result)
})

app.listen(3000,()=>{
    console.log('Server is on')
})