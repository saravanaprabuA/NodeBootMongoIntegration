https://services.github.com/on-demand/intro-to-github/explore-github-repository
https://guides.github.com/activities/hello-world/
https://github.com/

https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
====================================================================================================
install Git-2.18.0-32-bit and TortoiseGit-2.6.0.0-32bit in local machine

1.login into git hub

https://github.com/login

user: saravanaprabuA
pwd:  NAMO@123siva
saravanaprabu.a@gmail.com


2.Create New Repository called : MongoRestBootIntegration

git url: https://github.com/saravanaprabuA/MongoRestBootIntegration.git

3.open MongoRestBootIntegration folder in windows

4.right click -> Create Git Repository here

5.select the folders and files to add -> right click TortoiseGit -> add and commit

6.click on commit & push 

7. in the pop window local : master 

	Remote -> manage
	Remote: master
	url: https://github.com/saravanaprabuA/MongoRestBootIntegration.git
	
	Apply and ok


----------------------------------------------------
https://github.com/saravanaprabuA/SpringBootIntegration.git

git remote add origin remote repository https://github.com/saravanaprabuA/SpringBootIntegration.git
=======================================================

install Git-2.18.0-32-bit and TortoiseGit-2.6.0.0-32bit
https://github.com/saravanaprabuA
Create new Repository : SpringBootRest 
repo url:https://github.com/saravanaprabuA/SpringBootRest.git

in windows go to F:\saran\Techonology\SpringBoot\springboot-batch\springboot-batch

right click -> Create Git Repository here
select the folders and files to add -> right click TortoiseGit -> add
select the folders and files to commit and push -> right click Git commit -> master

in the commit window -> manage Remot : set the repo url and master
=======================================================
MongoRestBootIntegration:

Create: POST

http://localhost:8080/api/todo

{"title": "Title", "description":"Description"}
=======================================
Find All: GET
=======================================
http://localhost:8080/api/todo
=======================================
FindById: GET

http://localhost:8080/api/todo/5b6248da2f3e09b02742136b
=======================================
Update: PUT

http://localhost:8080/api/todo/5b6248da2f3e09b02742136b

{
	"id":"5b6248da2f3e09b02742136b",
	"title": "Updated Title", 
	"description":"Updated Description"
}
=======================================
Delete: DELETEhttp://localhost:3000/api/todo

http://localhost:8080/api/todo/5b6248da2f3e09b02742136b
====================================
Mongo DB Qurery: NoSQLBooster

db.todo.find({})
==================================================
Spring Rest with Node js mongodb integration

Run the node application
node app  

postmand: crate todo

POST: http://localhost:3000/api/todo
{
	"title": "Postman Title-3", 
	"description":"Post Description-3"
}

will create the record in todo table in mongo db

Get all: GET http://localhost:3000/api/todo

Get one: GET http://localhost:3000/api/todo/5b6349bf39d924d6b5f04c16

Update : PUT http://localhost:3000/api/todo/5b6349bf39d924d6b5f04c16

{
	"title": "Updated New Title", 
	"description":"Updated Description"
	
}


Delete: DELETE
http://localhost:3000/api/todo/5b631e0b39d924d6b5f04c13

"5b631e0b39d924d6b5f04c13 is deleted..."
==================================================

Git url:https://github.com/saravanaprabuA/NodeBootMongoIntegration.git

================================================
Adding to json object:
https://stackoverflow.com/questions/14234646/adding-elements-to-object




