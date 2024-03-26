let express = require("express");
let router = express.Router();
let User = require("../model/Users");
let jwt = require("jsonwebtoken");


router.get("/", (req, res) => {

    // try{
    //     if(req.headers.authorization == null){
    //         console.log("401");
    //         res.status(401).json({success: false, message: "Error!Token was not provided."});
    //     }
    //     const token = req.headers.authorization.split(' ')[1];    
    //     var user = jwt.verify(token, "secretkeyappearshere");
    //     next();
    // }
    // catch(ex){
    //     console.log("401, catch");
    //     res.status(401).json({status:"failed",data:"Error!Token is not valid"});
    // }

    User.find().then((result) => {

        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))

    })

});

router.get("/:id", (req, res) => {

    User.findById(req.params.id).then((result) => {

        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))

    })


});

router.post("/", (req, res) => {
    let body = req.body;
    let user = new User(body);

    user.save().then((result) => {

        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))

    })

});



// router.post("/login", (req, res) => {
//     const { email, password } = req.body;

//     User.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json({status:"success", data:user});
//                     res.json("success");
//                 } else {
//                     res.json({status:"failed", data:null});
//                 }
//             } else {
//                 res.json({status:"failed", data:null});
//             }
//         })
//         .catch(error => {
//             res.status(500).json({ error: "Internal server error" });
//         });
// });


router.put("/:id", (req, res) => {


    User.findByIdAndUpdate(req.params.id, req.body).then((result) => {

        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))

    })


});

router.delete("/:id", (req, res) => {


    User.findByIdAndDelete(req.params.id).then((result) => {

        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))

    })


});
module.exports = router;