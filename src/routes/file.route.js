const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("hello world !");
})


function checkerForUnderflow(num1, num2) {
    let check = -1000000;
    if (num1 < check || num2 < check) {
        return false;
    }
    return true;
}
function checkerForOverflow(num1, num2) {
    let check = 1000000;
    
    if (num1 > check || num2 > check) {
        return false;
    }
    return true;
}
router.post("/add", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if(typeof(num1) == String || typeof(num2) == String){
        res.send("invalid data type");
        return;
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let underFlow = checkerForUnderflow(num1, num2);
    if (!underFlow) {
        res.send("Underflow");
        return;
    }
    let OverFlow = checkerForOverflow(num1, num2);
    if (!OverFlow) {
        res.send("OverFlow");
        return;
    }
    res.json({
        "status": "success",
        "message": "the sum of given two numbers",
        "sum": num1 + num2
    }
    )
})


router.post("/sub",(req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(typeof(num1) == String || typeof(num2) == String){
        res.send("invalid data type");
        return;
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let underFlow = checkerForUnderflow(num1, num2);
    if (!underFlow) {
        res.send("Underflow");
        return;
    }
    let OverFlow = checkerForOverflow(num1, num2);
    if (!OverFlow) {
        res.send("OverFlow");
        return;
    }
    res.json({
        "status": "success",
        "message": "the sum of given two numbers",
        "difference": num1 - num2
    }
    )
})


router.post("/multiply",(req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if(typeof(num1) == String || typeof(num2) == String){
        res.send("invalid data type");
        return;
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let underFlow = checkerForUnderflow(num1, num2);
    if (!underFlow) {
        res.send("Underflow");
        return;
    }
    let OverFlow = checkerForOverflow(num1, num2);
    if (!OverFlow) {
        res.send("OverFlow");
        return;
    }
    res.json({
        "status": "success",
        "message": "the sum of given two numbers",
        "result": num1 * num2
    }
    )
})

router.post("/divide",(req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    console.log(typeof num2);
    if(isNaN(num1) || isNaN(num2)){
        res.send("invalid data type");
        return;
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(num2 == 0){
        res.send("cannot divide with zero");
        return;
    }
    let underFlow = checkerForUnderflow(num1, num2);
    if (!underFlow) {
        res.send("Underflow");
        return;
    }
    let OverFlow = checkerForOverflow(num1, num2);
    if (!OverFlow) {
        res.send("OverFlow");
        return;
    }
    res.json({
        "status": "success",
        "message": "the sum of given two numbers",
        "result": num1 / num2
    }
    )
})

module.exports = router;