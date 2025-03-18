import express from "express"

const router = express.Router();

router.get("/signup", (res, req)=>{
    res.send("signup route")
})
router.get("/login", (res, req)=>{
    res.send("login route")
})
router.get("/logout", (res, req)=>{
    res.send("logout route")
})

export default router;