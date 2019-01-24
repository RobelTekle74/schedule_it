# schedule_it
Back-end Group Project

Jan 15, 2019

## Group Members:
* Ashley Souvannaraj
* Robel Birkneh
* Pamela Matthews

## Project Concept:
schedule_it is designed as an online resource for small businesses to generate employee schedules in a straight forward format. 

### Project Overview:
Users are logged as owners or employees, with user information being stored through Passportjs. Also, passwords are hashed using bcryptjs. Owners are authenticated and routed to a dashboard to create employee accounts and generate schedules for their empolyees. Employee "users" and schedules are stored in the database using sequelize routes. User information is then pulled back and displayed to the page using ejs templating. Employees are routed to a different dashboard where they can view their account information and schedule, but without edit rights.

