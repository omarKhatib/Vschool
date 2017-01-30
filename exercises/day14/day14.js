var employees = [];


function Employee(name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary+'/hour';
    this.status = status || 'Full Time';
    this.printEmployeeForm = function(){
    console.log('Name: '+this.name+'\n job title: '+this.jobTitle+'\n salary: '+this.salary+'\n status: '+this.status);
 
    }

}

var emp1 = new Employee('omar','programmer',10000);
var emp2 = new Employee('ali','doctor',20000);
var emp3 = new Employee('jacob','instructor',30000);



employees.push(emp1);
employees.push(emp2);
employees.push(emp3);

for(var i=0 ; i<employees.length ; i++){
    employees[i].printEmployeeForm();
  
}