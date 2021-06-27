# TaskScheduler
A REST API based application similar to JIRA software

Refer to `images/` folder for screenshots of sample requests

### How to use -
1. Clone this project using ```git clone https://github.com/IshanRTripathi/TaskScheduler.git```
2. Open terminal with the location as src of the project, <br>example `C:\Users\Ishan R Tripathi\Desktop\TaskScheduler`
3. Run ```$ npm install``` to install dependencies
4. Once installed, change the port number if already in use, currently it is set to `3210`
5. Make changes to the `.env` file, add your own location where you've configured your mongoDB cluster and database
6. Run ```$ npm start```
7. The CLI output should look like - <br>
   `[nodemon] starting node index.js`<br>
   `Listening at port 3210`<br>
   `Connected to MongoDB with admin credentials`<br>
8. Open postman and hit endpoints. The endpoints are available in the `PostmanCollection` folder

### Functionalities

`TODO`
<blockquote contenteditable="false">
1. Search functionality <br>
2. Implement frontend using Reactjs <br>
3. Create sprints implementation
</blockquote>

`Done`
<blockquote contenteditable="false">
1. Add option to create a task <br>
2. Add option to get all tasks <br>
3. Create a schema for the db using javascript object <br>
4. Add states of a task like In Progress, Done, Blocker <br>
5. Add option to delete a task <br>
6. Add option to modify a task <br> 
7. Add new parameter, created by : {$username} <br>
</blockquote>
