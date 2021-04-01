class EmployeePayrollData
{
    

   get id()
   {
       return this._id;
   }
   set id(id)
   {
       this._id=id;
   }

   get name()
   {
      return this._name; 
   }

   set name(name)
  {

    let nameRegex = RegExp('^[A-Z]{1}{a-zA-Z\\s}{2,}$');
      
       if(nameRegex.test(name))
       {
        this.name=name;
       }

       else 
       {
         throw {
           message:  'Name is InCorrect !'
         };
       }  
   }

   get profile()
   {
       return this._profile;
   }
  
   set profile(profile)
   {
       this._profile=profile;
   }

   get gender()
   {
      return this._gender; 
   }

   set gender(gender)
   {
       this._gender=gender;
   }

   get department()
   {
       return this._department;
   }

   set department(department)
   {
       this._department=department;
   }

   get salary()
   {
       return this._salary;
   }
 
   set salary(salary)
   {
       this._salary=salary;
   }

   get notes()
   {
       return this._notes;

   }

   set notes(notes)
   {
       this._notes=notes;
   }

   get startDate()
   {
       return this._startDate;
   }

   set startDate(startDate)
   {
       this._startDate=startDate;
   }

   toString()
   {
       const option ={year: 'numeric', month: 'long', day:'numeric'};
       const empDate=!this.startDate ? "undefined" : this.startDate.toLocalDateString("en-us",option);

       return "id = " +this.id+ ", name= " +this.name+ ", gender = " +this.gender+ ", profile pic = " +this.profile+ " ,department = "+this.department+ ", salary = " +this.salary+ " ,startDate = "+this.startDate+ " "
   


   }
}  



window.addEventListener('DOMContentLoaded' ,(Event) => {

    const name =document.querySelector('#name');
    const TextError =document.querySelector('.text-error');
    name.addEventListener('input' ,function() {


        if(name.value.langth==0)
          {
              TextError.textContent="";
              return;
          }
          
          try {
              (new EmployeePayrollData()).name=name.value;
              TextError.textContent="";
              
          } catch (e) {
              e.textContent=TextError;
          }

    });


    const salary=document.querySelector("#salary");
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;

    salary.addEventListener('input', function() {
          output.textContent=salary.value;
    });

});

const save=() =>
{
    //let EmployeePayrollData = createEmployePayrollData();
    try{
        EmployeePayrollData.name =getInputValueById('#name');
    }
    catch(e)
    {
        setTextValue('.text-error',e);
    }

    EmployeePayrollData.profile=getSelectedValues('[name=profile]').pop();
    EmployeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    EmployeePayrollData.department=getSelectedValues('[name=department]');
    EmployeePayrollData.salary=getInputValueById('#salary');
    EmployeePayrollData.notes=getInputValueById('#notes');
    let date=getInputValueById('#day')+ " "+getInputValueById('#month')+ " "+getInputValueById('#year');
    EmployeePayrollData.date=Date.parse(date);
    addEventListener;
    alert(EmployeePayrollData.toString());
    return EmployeePayrollData;

}

const getSelectedValues = (propertyValue) =>{
    let allitems = document.querySelectorAll(propertyValue);
    let selitems =[];
    
    allitems.forEach(item => {
        if(item.checked){
            selitems.push(item.value);
        }
    });

      return selitems;
}


const getInputValueById =(id) =>{
    let value = document.querySelector(id).value;
    return value;
}


/**const save = () => {
    try {
        let EmployeePayrollData = createEmployePayrollData();
        createAndUpdateStorage(EmployeePayrollData);
    } catch (error) {
        return;
    }
   
}
**/
function createAndUpdateStorage(EmployeePayrollData)
{ 
   let employeePayrollList =JSON.parse(localStorage.getItem("EmployeePayrollList"));

   if(employeePayrollList != undefined){
       employeePayrollList.push(employeePayrollList);

   }

   else
   {
       employeePayrollList = [employeePayrollData];
   }
    
     
   alert(EmployeePayrollList.toString());
   localStorage.setItem("EmployeePayrollList" , JSON.stringify(employeePayrollList));

}

const resetForm=() =>
{
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','');
    setValue('#month','january');
    setValue('#year','2020');


}

const unsetSelectedValues = (propertyValue) =>{
    let allitems = document.querySelectorAll(propertyValue);
    allitems.forEach(item =>{
        item.checked = false;

    } );
}

const setTextValue = (id,value) =>{
    const element = document.querySelector(id);
    element.textContent=value;
}

const setValue = (id , value) =>{
    const element = document.querySelector(id);
    element.value=value; 
}