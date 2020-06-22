const express = require('express')
const port = 9000
const bodyParser = require('body-parser')
const router=require('./router')
const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => { res.send("hello") })
app.use(router)

app.use((err, req, res, next) => {
    let message = err.message
    let stack = err.stack

    res.status(500)
        .json({ message, stack })
})
/*
//router demo
const routerExample = new express.Router()
const routerChild1 = new express.Router()
const routerChild2 = new express.Router()

routerExample.get('/e1',(req,res)=> res.send('e1')) // /example/e1
routerExample.post('/e2',(req,res)=> res.send('e2'))

routerChild1.get('/',(req,res)=> res.send('Child 1'))

routerChild2.get('/',(req,res)=> res.send('Child 2'))
// end demo

//ex1
// app.use('/example',routerExample)
// app.use('/child1',routerChild1)
// app.use('/child2',routerChild2)

//ex2
routerExample.use('/child1',routerChild1)
routerExample.use('/child2',routerChild2)
app.use('/example',routerExample)

*/
app.listen(port, (err) => console.log(err || 'server start at ' + port))
