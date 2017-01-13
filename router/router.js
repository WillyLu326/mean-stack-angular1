const express = require('express'),
	Emp = require('../models/emp'),
	router = express.Router();

module.exports = router;

// get all emps
router.get('/emps', (req, res) => {
	Emp.find({}, (err, emps) => {
		if (err) throw err;
		res.json(emps);
	});
});

// get an emp
router.get('/emps/:name', (req, res) => {
	Emp.find({name: req.params.name}, (err, emp) => {
		if (err) throw err;
		res.json(emp);
	});
});

// create an emp
router.post('/emps', (req, res) => {
	const body = req.body;
	const newEmp = new Emp(body);

	newEmp.save((err) => {
		if (err) throw err;
		res.send('update successfully');
	});
});

// update an emp
router.put('/emps/:name', (req, res) => {
	const body = req.body;

	Emp.findOne({name: req.params.name}, (err, emp) => {
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
router.delete('/emps/:name', (req, res) => {
	Emp.remove({name: req.params.name}, (err) => {
		if (err) throw err;
		res.send('delete successfully');
	})
})