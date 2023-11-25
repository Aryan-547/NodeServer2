const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'ejs')

const USERS =[
    {
        username:'ram',
        firstName:'Ram',
        lastName:'kumar Verma',
        email:'ram@gmail.com',
        Avatar:'https://reqres.in/img/faces/7-image.jpg',
        isPremium:false,
        // hobbies:['I','J','K']
    },
    {
        username:'lakshman',
        firstName:'Lakshman',
        lastName:'Singh',
        email:'lakshman@gmail.com',
        Avatar:'https://reqres.in/img/faces/2-image.jpg',
        isPremium:true
    }
]


app.get('/', (req,res)=>{
    res.json({message:'All good'})
})

app.get('/not-found', (req,res)=>{
    res.render('not-found')
})


app.get('/:username', (req,res)=>{
    const {username}=req.params
    const userDetails = USERS.find(user=>user.username===username)
    if(userDetails)
    res.render('user',userDetails)
    else
        res.redirect('/not-found')
})




// app.get('/ram', (req,res)=>{
//     let RamDetails={
//         firstName:'Ram',
//         lastName:'kumar Verma',
//         email:'ram@gmail.com',
//         Avatar:'https://reqres.in/img/faces/7-image.jpg',
//         isPremium:false,
//         hobbies:['I','J','K']
//     }
//     res.render('user', RamDetails)
// })

// app.get('/lakshman', (req,res)=>{
//     let LakshmanDetails={
//         firstName:'Lakshman',
//         lastName:'Singh',
//         email:'lakshman@gmail.com',
//         Avatar:'https://reqres.in/img/faces/2-image.jpg',
//         isPremium:true
//     }
//     res.render('user',LakshmanDetails)
// })


app.listen(3000, ()=>{
    console.log('Server running on http://localhost:3000')
})