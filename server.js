const express = require('express')
const mongoose = require('mongoose')
// const path = require('path') //used during production
const config = require('config')

//MongoDB Config
const mongoDB = config.get('mongoURI')

const app = express();

//Body-Parser via express
app.use(express.json())

//MongoDB Connection
mongoose.connect(mongoDB, {
    //connect to database (asynchronously - provides a promise) -- second arguement object stops depcracation warnings
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

//Routes
app.use('/api/notes', require('./routes/api/notes'))    // CRUD Routes for Notes
app.use('/api/users', require('./routes/api/users'))    // Register New Users When Signing Up
app.use('/api/auth', require('./routes/api/auth'))      // Authenticate Users During Sign In


//Serve Static Assets if in production
// if(process.env.NODE_ENV === 'production'){
//     //SET static Folder
//     app.use(express.static('client/build'));

//     //Load the index.html file -- any request not /api/items should load html
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     })
// }

//Port
const port = process.env.PORT || 5000;  //process.env.PORT used during deployment
app.listen(port, () => console.log(`Server started on port ${port}`))