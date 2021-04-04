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
              TextError.textContent=e;
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
   try
   {
      let employeePayrollData =createEmployePayroll();
      createAndUpdateStorage(employeePayrollData);

   }

   catch(e){
       return;
   }
}
  
const createEmployePayroll =() =>{

     let employeePayrollData = new EmployeePayrollData();
     try{
        employeePayrollData.name =getInputValueById('#name');
        }
    catch(e)
    {
        setTextValue('.text-error',e);
        throw e;
    }

    employeePayrollData.profile=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department]');
    employeePayrollData.salary=getInputValueById('#salary');
    employeePayrollData.notes=getInputValueById('#notes');
    let date=getInputValueById('#day')+ " "+getInputValueById('#month')+ " "+getInputValueById('#year');
    employeePayrollData.date=Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;

}

const getSelectedValues = (propertyValue) =>{
    let allitems = document.querySelectorAll(propertyValue);
    let selitems =[];
    
    allitems.forEach(item => {
        if(item.checked) selitems.push(item.value);
    });

      return selitems;
}


const getInputValueById =(id) =>{
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementsValue =(id) =>{
    let value = document.getElementById(id).value;
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
function createAndUpdateStorage(employeePayrollData)
{ 
   let employeePayrollList =JSON.parse(localStorage.getItem("EmployeePayrollList"));

   if(employeePayrollList != undefined){
       employeePayrollList.push(employeePayrollList);

   }

   else
   {
       employeePayrollList = [employeePayrollData];
   }
    
     
   alert(employeePayrollList.toString());
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