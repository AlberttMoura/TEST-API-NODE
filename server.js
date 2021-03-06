const app = require('express')()
const db = require('./people')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.status(200).json([{
        '/people': 'getAllPeople | createPerson',
        '/people/id': 'getPersonById | deletePerson | updatePerson',
    },
    {
        name: 'Cool Name',
        age: 100,
        country: 'Antarctica' 
    }
    ])
})

app.get('/people', async (req, res) => {
    const people = await db.getAllPeople()
    return res.status(200).json({people})
})

app.get('/people/:id', async (req, res) => {
    const person = await db.getPersonById(req.params.id)
    return res.status(200).json({person})
})

app.post('/people', async (req, res) => {
    const results = await db.createPerson(req.body)
    const person = await db.getPersonById(results[0])
    return res.status(201).json({person})
})

app.patch('/people/:id' , async (req, res) => {
    const id = await db.updatePerson(req.params.id, req.body)
    const person = await db.getPersonById(id)
    return res.status(200).json({person})
})

app.delete('/people/:id' , async (req, res) => {
    await db.deletePerson(req.params.id)
    return res.status(200).json({success: true})
})

const port = 8000

app.listen(process.env.PORT || port, console.log(`Listening to port ${port}`))