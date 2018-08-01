module.exports = (app) => {
    //Spring Rest Call
    var request = require('request');
    var url = "http://localhost:8080/api/todo";

    app.post('/postrest', function (req, res) {

    // Validate request
    console.log('postman title:'+req.body.title)
    console.log('postman description:'+req.body.description)

    var requestData = ({
        title: req.body.title,
        description: req.body.description
    });

    var data = {
        url: url,
        json: true,
        body: JSON.parse(JSON.stringify(requestData).toString().trim())
    }
        
    console.log("Inside postRest...requestData:"+JSON.stringify(requestData));
    
    request.post(data, function(error, httpResponse, body){
        console.log("Todo created...");
        res.status(200).send(body);
    });
        
    });
}