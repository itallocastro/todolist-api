const router = require('express-promise-router')();
const taskController = require('../controllers/task.controller');

router.get('/find', taskController.find);
router.post('/create', taskController.create);
router.put('/edit/:id', taskController.edit);
router.delete('/delete/:id', taskController.delete);


module.exports = router;
