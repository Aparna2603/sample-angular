'use strict';

const Router = require('koa-router');
const miscController = require('./database/controller/misc');
// const employeeController=require('./controllers/employee');


const router = new Router();

router.post('/add',miscController.createEmployee);
router.delete('/delete',miscController.deleteEmployee);
router.get('/edit1',miscController.getemployeebyID);
router.get('/edit', miscController.getEmployee);



module.exports = router;
