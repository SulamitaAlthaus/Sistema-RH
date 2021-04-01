const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');
const CompanyController = require('../controller/CompanyController');

router.post('/newuser', UserController.create);
router.put('/user/update/:matricula', UserController.update);
router.get('/user/show/:companyId/', UserController.all);
router.get('/user/show/:nome/', UserController.showName);
router.get('/user/showid/:matricula', UserController.showMatricula);
router.delete('/user/delete/:matricula', UserController.delete);

router.post('/newcompany', CompanyController.create);
router.put('/company/update/:id', CompanyController.update);
router.get('/company/filter/all/', CompanyController.all);
router.get('/company/show/:id', CompanyController.showId);
router.delete('/company/delete/:id', CompanyController.delete);

module.exports = router;
