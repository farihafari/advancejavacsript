// constructor is es5 feature which make a blueprint 
function Employee(name,age,salary){
    this.em_name= name;
    this.em_age=age;
    this.em_salary=salary;
    this.post=function(designation){  //method declaration
        this.des=designation;
    }
    }
    let e1= new Employee("ali",23,"25k");
    e1.post("coordinator") //method calling in constructor
    let e2=new Employee("hamza",30,"50k",)
    // document.write(e1.em_name)
    console.log(e1);
    console.log(e2);