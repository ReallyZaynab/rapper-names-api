const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'Honda': {
        'birthName': 'Charlie',
        'age': 29,
        'birthLocation': 'Colomobo, Sri Lanka'
    },
    'Chancelor':{
        'birthName': 'Chocolate',
        'age': 50,
        'birthLocation': 'Chicago, Illinois'
    },
    'Unknown':{
        'birthName': 'Unknown',
        'age': 0,
        'birthLocation': 'Unknown'
    }
}
app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['Unknown'])
    }
})

app.listen(PORT,()=>{
    console.log(`Your server is running on port ${PORT}`)
})