const Express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = Express()

const costumers = []
const id = uuidv4()

app.use(Express.json())

app.get('/courses', (req, res) => {
  return res.send(courses)
})

app.post('/courses', (req, res) => {

   const {cpf, name } = req.body

   costumers.push({
    name, 
    cpf,
    id
   })

   return res.json({costumers})
})

app.put('/courses/:id', (req, res) => {
 
})

app.patch('/courses/:id', (req, res) => {
  
})

console.log('Servidor rodando...')

app.listen(3333)