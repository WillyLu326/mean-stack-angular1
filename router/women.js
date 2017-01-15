const express = require('express'),
	Woman = require('../models/woman'),
	router = express.Router();

module.exports = router;

// get all emps
router.get('/women', (req, res) => {
	Woman.find({}, (err, emps) => {
		if (err) throw err;
		res.json(emps);
	});
});

// get an emp
router.get('/women/:name', (req, res) => {
	Woman.find({name: req.params.name}, (err, women) => {
		if (err) throw err;
		res.json(women);
	});
});

// create an emp
router.post('/women', (req, res) => {
	const body = req.body;
	const newEmp = new Woman(body);

	newEmp.save((err) => {
		if (err) throw err;
		res.send('update successfully');
	});
});

// update an emp
router.put('/women/:name', (req, res) => {
	const body = req.body;

	Woman.findOne({name: req.params.name}, (err, emp) => {
		if (err) throw err;
		emp.address.city = body.address.city;
		emp.address.state = body.address.state;
		emp.age = body.age;

		emp.save(err => {
			if (err) throw err;
			res.send('update successfully');
		});
	});
});

// delete an emp
router.delete('/women/:name', (req, res) => {
	Woman.remove({name: req.params.name}, (err) => {
		if (err) throw err;
		res.send('delete successfully');
	})
})