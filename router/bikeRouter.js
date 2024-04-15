import { Router } from "express";

let bikeRouter = Router();

let createBikes = (a,b) => {
    return (req,res,next) =>  {
        console.log("Bike created successfully")
    }
}

bikeRouter
.route("/")
// .post(createBikes)
//use this format if you need to pass values

.post(createBikes(1,2))

//use this format if you don't need to pass values
// .post((req,res,next)=> {
//     console.log(req.body);
//     res.json("bike post");
// })
.get((req,res,next)=> {
    console.log(req.query);
    res.json("bike get");
})
.patch((req,res,next)=> {
    res.json("bike patch");
})
.delete(
    (req,res,next)=>{
        res.json("hello");
        console.log("i am middleware 1");
        let err1 = new Error("i am error");
        next(err1);
    },
    (req,res,next)=>{
        console.log("i am middleware 2");
        // let err1 = new Error("i am error 2");
        next();
    },
    (err,req,res,next)=>{
        console.log("i am middleware 3");
        console.log(err.message);
    }
    );

bikeRouter
.route("/:id") //localhost:8000/bikes/id
.post((req,res,next)=>{
    console.log(req.params);
    /*
    req.params is an object
    {
        id:1234
    }
    */ 
    res.json("learning dynamic route paramaters");
})
.get((req,res,next)=>{
    res.json("get dynamic route");
});

bikeRouter
.route("/a/:id1/name/:id2") //localhost:8000/bikes/a/any/name/any
.post((req,res,next)=>{
    console.log(req.params);
    res.json("hello");
});

//req.params gives dynamic route parameter in the form of object { id1 :"", id2: ""}

//here a and name are static route params
//and id1 and id2 are dynaminc route params


export default bikeRouter;