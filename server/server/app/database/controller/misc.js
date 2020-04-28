'use strict';
//
// const os = require('os');
// const pkginfo = require('../../package.json');
// const spec = require('../spec');
// const db=require('../database')

const requestPromise = require('request-promise');
const {Pool, Client}=require('pg');
 var Joi=require('joi');
 const userSchema = require('../validation/user');
 // const  Orders = require('../models/employee').Orders,



// Create an employee
exports.createEmployee =async (ctx , req, res) => {
    const pool= new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database:process.env.PG_DB,
    password:process.env.PG_PASS,
    port:process.env.PG_PORT

      })

  const userData = {};
  const validate = Joi.validate(ctx.request.body, userSchema);
  // if(validate){
  //   console.log("-----------------true-------",validate);
    userData.name=  ctx.request.body.name;
    userData.address = ctx.request.body.address;
    userData.jod=ctx.request.body.date;
    userData.height=ctx.request.body.height;
      userData.weight=ctx.request.body.weight;
    userData.email=ctx.request.body.email;
    userData.gender=ctx.request.body.gender;
    userData.basicsalary=ctx.request.body.B;
    userData.gross_pay=ctx.request.body.Grosspay;

    return new Promise((resolve, reject) => {
        const { body } = ctx.request. body;
        console.log("----------------",body);
        var name=userData.name;
        var address= userData.address;
        const doj=userData.jod;
        const height=userData.height;
        const weight=userData.weight;
        const email=userData.email;
        const gender= userData.gender;
        const basicsalary=userData.basicsalary;
        const grosspay= userData.gross_pay;

    if(ctx.request.body.mode =="Save"){
      pool.query("INSERT INTO employee (employee_name,address,doj,height,weight,email,gender,basic_salary,grosspay) values('"+name+"','"+address+"','"+doj+"','"+height+"','"+weight+"','"+email+"','"+gender+"','"+basicsalary+"','"+grosspay+"')") ,(err,res)=>{
    if(err){
             res.send(err);
          }

          else{
          res.send({data:"Record has been Inserted..!!"});
          }
          pool.end()
        }
    }

    });
  // }
};

// GET an employee DETAILS
exports.getEmployee =async (ctx , req, res) => {
  console.log("----------------------get employee called-----",ctx.request.body);
  const pool= new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database:process.env.PG_DB,
  password:process.env.PG_PASS,
  port:process.env.PG_PORT

    })
  return new Promise((resolve, reject) => {
  pool.query('SELECT * FROM employee', (err,data) => {
    console.log("----------------------",data);
    if(data)
      {
        const data = {
        status: 'pass'
      };
      ctx.body = data;
        res.send(data);
    }
    if(err){
      console.log("----err-------------",err);
      res.send(err);
    }
    pool.end();
  });
});
};


//GET an employee by id and update employee
exports.getemployeebyID =async (ctx , req, res) => {
  console.log("----------------------get employee  by id  called-----",ctx.request.body);
  const pool= new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database:process.env.PG_DB,
  password:process.env.PG_PASS,
  port:process.env.PG_PORT

    })
  return new Promise((resolve, reject) => {
const userData = {};
 userData.name=  ctx.request.body.employee_name;
  var name=userData.name;
userData.address= ctx.request.body.address;
var address=userData.address;
userData.height=ctx.request.body.height;
var height=userData.height;
userdata.weight=ctx.request.body.weight;
var weight=userData.weight;
userdata.email=ctx.request.body.email;
var email=userData.email;
userdata.gender=ctx.request.body.gender;
var gender=userData.gender;
userData.basicsalary=ctx.request.body.BS;
const basicsalary=userData.basicsalary;
userData.grosspay=ctx.request.body.Grosspay;
const grosspay= userData.grosspay;



pool.query("UPDATE employee SET address='"+address+"' WHERE employee_name = '"+name+"';", (err,data) => {
    if(data)
    {
        const data = {
        status: 'pass'
      };
      res.send(data);
    }
    if(err){
      console.log("----err-------------",err);
      res.send(err);
    }
    pool.end();
   });
 });
};




// Delete Employee
exports.deleteEmployee =async (ctx , req, res) => {
  console.log("----------Delete Employee Method calls-----------------");
const pool= new Pool({
user: process.env.PG_USER,
host: process.env.PG_HOST,
database:process.env.PG_DB,
password:process.env.PG_PASS,
port:process.env.PG_PORT

  })
  var name=ctx.request.body.employee_name;
pool.query("DELETE FROM employee  WHERE employee_name = '"+name+"';",(err,res)=>{
  if(data)
  {
    const data = {
    status: 'pass'
  };
  ctx.body = data;
    res.send(data);
  }
  if(err){
    console.log("----err-------------",err);
    res.send(err);
  }
  pool.end();

  })
};
