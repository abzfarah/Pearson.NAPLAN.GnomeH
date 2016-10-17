var Controller = require('../controllers/SchoolController');

exports.endpoints = [
  { method: 'GET', path: '/school', config: Controller.getAll},
  { method: 'GET', path: '/school/{schoolId}', config: Controller.getOne}
];
