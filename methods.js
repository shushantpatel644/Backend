const express = require('express');

const app = express();
//middleware func -> post,front->json
app.use(express.json());
app.listen(3000);

let users =
    [
        {
            "id": 1,
            "name": "Shushant"
        },
        {
            'id': 2,
            'name': "Kartik"
        },
        {
            'id': 3,
            'name': "Ashu"
        },
    ];

//mini app
const userRouter = express.Router();
const authRouter = express.Router();
//base route , router to use
app.use("/user", userRouter);
app.use("/auth", authRouter);


userRouter
    .route("/")
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)

userRouter.route("/:id").get(getUserById);

authRouter
.route('/signup')
.get(getSignUp)
.post(postSignUp);


app.get('/user/:username',)
function getUser(req, res) {
    res.send(users);
};

function postUser(req, res) {
    console.log(req.body);
    users = req.body;
    res.json({
        message: "data received successfully",
        user: req.body
    });
}

function updateUser(req, res) {
    console.log('req.body->', req.body);
    //update data in users obj
    let dataToBeUpdated = req.body;
    for (key in dataToBeUpdated) {
        users[key] = dataToBeUpdated[key];
    }
    res.json({
        message: "data updated successfully"
    });
}

function deleteUser(req, res) {
    users = {};
    res.join({
        message: "data has been deleted"
    });
}

function getUserById(req, res) {
    console.log(req.params.id);
    let paramId = req.params, id;
    let obj = {};
    for (let i = 0; i < users.length; i++) {
        if (users[i]['id'] == paramId) {
            obj = users[i];
        }
    }
    res.json({
        message: "req received",
        data: obj
    });
}

function getSignUp(res,req){
    res.sendFile('')
}
/* 
// app.get('/users',)

// app.post('/users', (req, res) => {
//     console.log(req.body);
//     users = req.body;
//     res.json({
//         message: "data received successfully",
//         user: req.body
//     });
// });

//update ->patch
// app.patch('/user',)

//to delete a data 
// app.delete('/user',);*/