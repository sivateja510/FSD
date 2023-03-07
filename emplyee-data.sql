
create table EmployeeDetails (
Emp_id int not null primary key,
Emp_name varchar(30) not null,
Job_name varchar(30) not null,
Manager_id int not null ,
Hire_date varchar(30) not null ,
Salary int not null ,
Dep_id int not null
);

insert into EmployeeDetails values(155,'siva','developer',201,'22-jan-2024',50000,1012);

insert into EmployeeDetails values(102,'arun','tester',302,'26-feb-2019',78000,1052);

insert into EmployeeDetails values(104,'benny','HR',307,'26-june-2014',78000,1052);

insert into EmployeeDetails values(112,'aakash','employee',300,'26-oct-2014',78900,1054);

insert into EmployeeDetails values(117,'himanshi','employee',700,'26-jan-2014',70900,1074);

insert into EmployeeDetails values(17,'raja','developer',100,'26-oct-2018',81047,1974);

insert into EmployeeDetails values(817,'hasan','tester',125,'26-oct-2022',92047,1274);

insert into EmployeeDetails values(856,'madhu','designer',146,'30-dec-2022',780047,6274);

insert into EmployeeDetails values(886,'satwik','programer',178,'10-feb-2022',48047,6174);

insert into EmployeeDetails values(876,'raj','designer',182,'10-feb-2014',42547,6974);


--select Salary from EmployeeDetails;

--select distinct Job_name from EmployeeDetails;

--update EmployeeDetails set Salary= 45000 where Emp_name ='raj';


