//const express = require('express');
//const db = require('./db/database');
const inquirer = require('inquirer');

inquirer.prompt({
    type: 'list',
    message: 'What would you like to do?',
    name: 'userpick',
    choices: ['View all Departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', "Update an employee's role"]
}).then(({ userpick }) => {
    switch(userpick) {
        case "View all Departments":
            console.log("View all Departments")
            
            break;
        case "View all roles":
            console.log("View all roles")

            break;
        case "View all employees":
            console.log("View all employees")

            break;
        case "Add a department":
            console.log("Add a department")
            inquirer.prompt({
                type: 'input',
                message: 'What is the role you want to add?',
                name: 'roleName',
                validate: name => {
                    if(name.length > 30){
                        console.log('please keep it under 30 characters')
                        return false;
                    }
                    return true;
                }
            }).then(data => {
                //do something
            })
            break;
        case "Add a role":
            console.log("Add a role")
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the role you want to add?',
                    name: 'roleName',
                    validate: name => {
                        if(name.length > 30){
                            console.log('please keep it under 30 characters')
                            return false;
                        }
                        return true;
                    }
                },
                {
                    type: 'input',
                    message: "what is the ID of the department this is under?",
                    name: "departmentID",
                    validate: idInput => {
                        if(isNaN(idInput)){
                            console.log("input a number");
                            return false;
                        }
                        return true;
                    }
                }
            ]).then(data => {
                //do something
            })
            break;
        case "Update an employee's role":
            console.log("Update an employee's role")
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'what is the ID of the employee you want to update?',
                    name: 'employeeId',
                    validate: idInput =>{
                        if(isNaN(idInput)){
                            console.log("input a number");
                            return false;
                        }
                        return true;
                    }
                },
                {
                    type: 'input',
                    message: 'what is the ID of the role you want to update?',
                    name: 'roleId',
                    validate: idInput =>{
                        if(isNaN(idInput)){
                            console.log("input a number");
                            return false;
                        }
                        return true;
                    }
                }
            ]).then( data =>{
                //console.log(data.employeeId + data.roleId);
                //do things with data
            })
            break;
    }
})