
import express from "express";
import { Request, Response } from 'express';

// let express= require("express");
//  { Request, Response } = require("express");
let app=express();

app.listen(8000,()=>{
    console.log('app is listening on http://localhost:8000')
})
app.use('', (req: Request, res: Response,next)=>{
    console.log('app use');
    next()

}, (req: Request, res: Response,next)=>{
    console.log('app use1');
    next()

})
app.use('/api', (req: Request, res: Response) => {
    console.log('app use2');
    res.send({title:'hero'})
})