var Request = require("request");

var faker = require("faker");

var appRouter = function (app) {


  app.get("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  app.get("/customers", function (req, res) {

    var reqGet = Request.get("http://localhost:8080/customers", (error, response, body) => {
     if(error) {
        console.log('Error...');
        return console.dir(error);
     }
      console.log(JSON.parse(body));
      res.json(JSON.parse(body));
    });
  });	

  app.post("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our post restful API' });
  });
  
app.get("/restapi", function (req, res) {

   var reqGet = Request.get("http://localhost:8080/students/Student1/courses/Course1", (error, response, body) => {
    if(error) {
	console.log('Error...');
        return console.dir(error);
    }
     console.log(JSON.parse(body.content));
     res.json(JSON.parse(body));
   });
 });	

  app.get("/user", function (req, res) {
    var data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
    res.status(200).send(data);
  });

 app.get("/users/:num", function (req, res) {
   var users = [];
   var num = req.params.num;

   if (isFinite(num) && num  > 0 ) {
     for (i = 0; i <= num-1; i++) {
       users.push({
           firstName: faker.name.firstName(),
           lastName: faker.name.lastName(),
           username: faker.internet.userName(),
           email: faker.internet.email()
        });
     }

     res.status(200).send(users);
    
   } else {
     res.status(400).send({ message: 'invalid number supplied' });
   }

 });
}

module.exports = appRouter;