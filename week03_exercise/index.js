var http = require("http");
//TODO - Use Employee Module here
var employeeModule = require("./Employee"); // Import the employee module
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            const employees = employeeModule.getAllEmployees();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employees));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const employeeNames = employeeModule.getEmployeeNames();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employeeNames));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            const totalSalary = employeeModule.getTotalSalary();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ total_salary: totalSalary }));
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})