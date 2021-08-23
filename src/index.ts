import express from "express";
import path from "path";
const app = express();
const port = 4000; // default port to listen
import bodyParser from 'body-parser'

// define a route handler for the default home page

app.use(bodyParser.urlencoded({ extended: false }))

//  parse application/json
app.use(bodyParser.json())

app.get( "/", ( req, res ) => {
    let name:string = req.body.name
    // render the index template
    const a:number = 3
   res.send(`number = ${name}`)
} );

// start the express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
