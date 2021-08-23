import express from "express";
const router = express.Router();
import multer from "multer"
const upload = multer({ dest: 'uploads/' })
import {PythonShell} from 'python-shell';
import * as fs from 'fs';
import * as util from 'util'
import path from "path"
const dirPath = path.join(process.cwd(), '/src/python/script1.py');

// import ss from "../routes/"

import {spawn} from "child_process"
// require("../python/script.py")


router.post("/check",upload.single('file'),(req,res)=>{

    // const pythonProcess = spawn('python3',["../python/script.py"]);
console.log("dir",process.cwd())
    PythonShell.run(dirPath,null,  (err, results)=> {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
      });
// console.log("python process",pythonProcess)

    console.log("file",req.file)
    res.send("data")
})


export default router
// e

// module.exports = router;