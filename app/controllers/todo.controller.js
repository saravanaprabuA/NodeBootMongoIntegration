var request = require('request');

var url = "http://localhost:8080/api/todo/";

var options = {
    url: url,
    json: true,
    headers: {
        "Content-Type": "application/json",
        accept: 'application/json'
    }
}

// Create and Save a new todo
exports.create = (req, res) => {
    options.url = url;
    console.log('postman title:'+req.body.title)
    console.log('postman description:'+req.body.description)

    var bodyData = ({
        title: req.body.title,
        description: req.body.description
    });

    //static
    /*var data = {
        url: url,
        json: true,
        body: JSON.parse(JSON.stringify(bodyData).toString().trim())
    }*/
    //Dynamic
    options.body = JSON.parse(JSON.stringify(bodyData).toString().trim());  
    
    request.post(options, function(error, httpResponse, body){
        console.log("Todo created...");
        res.status(200).send(JSON.stringify(body));
    });     
};

exports.findAll = (req, res) => {
    options.url = url;
    request.get(options, function(error, httpResponse, body){
    console.log("data:"+JSON.stringify(body)); 
    res.send(JSON.stringify(body));
    });
};

exports.findOne = (req, res) => {
    console.log("findOne req.params.todoId:"+req.params.todoId);
    options.url = url + req.params.todoId;
    console.log("options:"+options);
    request.get(options, function(error, httpResponse, body){
        console.log("data:"+JSON.stringify(body)); 
        res.send(JSON.stringify(body));
    });
};

exports.update = (req, res) => {
    options.url = url + req.params.todoId;
    request.put(options, function(error, httpResponse, body){
        console.log("updated data:"+JSON.stringify(JSON.parse(JSON.stringify(body).toString().trim()))); 
        
        res.send(JSON.stringify(body));
    });
};

exports.delete = (req, res) => {
    options.url = url + req.params.todoId;
    request.delete(options, function(error, httpResponse, body){
        console.log("deleted data:"+JSON.stringify(body)); 
        res.send(JSON.stringify(body));
    });
};