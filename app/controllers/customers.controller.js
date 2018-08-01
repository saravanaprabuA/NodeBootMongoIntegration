const Customer = require('../models/customer.model.js');

// Create and Save a new customer
exports.create = (req, res) => {
    // Validate request
    console.log('custid:'+req.body.custid)
    console.log('firstname:'+req.body.firstname)
    console.log('lastname:'+req.body.lastname)
    if(!req.body.custid) {
        return res.status(400).send({
            message: "Customer Data can not be empty"
        });
    }

    // Create a customer
    const customer = new Customer({
        custid: req.body.custid,
        firstname: req.body.firstname, 
        lastname: req.body.lastname
    });

    // Save customer in the database
    customer.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the customer."
        });
    });
};

// Retrieve and return all customers from the database.
exports.findAll = (req, res) => {
    Customer.find()
    .then(customers => {
        res.send(customers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving customers."
        });
    });
};

// Find a single customer with a customerId
exports.findOne = (req, res) => {
    console.log('findOne req.params.customerId:'+req.params.customerId)
    Customer.findById(req.params.customerId)
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });            
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.customerId
        });
    });
};

// Update a customer identified by the customerId in the request
exports.update = (req, res) => {
    console.log(' Update req.params.customerId:'+req.params.customerId)
    console.log(' Update custid:'+req.body.custid)
    console.log(' Update firstname:'+req.body.firstname)
    console.log('Update lastname:'+req.body.lastname)
    // Validate Request
    if(!req.body.custid) {
        return res.status(400).send({
            message: "customer content can not be empty"
        });
    }

    // Find customer and update it with the request body
    Customer.findByIdAndUpdate(req.params.customerId, {
        custid: req.body.custid,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }, {new: true})
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.customerId
            });
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });                
        }
        return res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
        });
    });
};

// Delete a customer with the specified customerId in the request
exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.customerId)
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "customer not found with id " + req.params.customerId
            });
        }
        res.send({message: "customer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "customer not found with id " + req.params.customerId
            });                
        }
        return res.status(500).send({
            message: "Could not delete customer with id " + req.params.customerId
        });
    });

};