var express = require('express');
var router = express.Router();
// import api util from utils
var { api } = require('../utils')

/* GET users page. */
router.get('/', function(req, res) {
  api.getUsers().then(users => {
    res.render('users', {users: JSON.stringify(users)});
  }).catch(err => {
    res.status(500).send(err)
  })
});
/* GET Todo page. */
router.get('/:id/todos', function(req, res) {
  api.getUserTodo(req.params.id).then(todo => {
    res.render('todo', {todo: JSON.stringify(todo)});
  }).catch(err => {
    res.status(500).send(err)
  })
});
module.exports = router;
