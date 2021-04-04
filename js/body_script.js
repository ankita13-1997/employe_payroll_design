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

    var nameRegex =/^[a-zA-Z]+ [a-zA-Z]+$/;

      
       if(nameRegex.test(name))
       {
        this._name=name;
       }

       else  throw  'Name is InCorrect !';
         
         
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


   get startDate()
   {
       return this._startDate;
   }

   set startDate(startDate)
   {
       this._startDate=startDate;
       console.log(startDate);
   }

   get notes()
   {
       return this._notes;

   }

  
   set notes(notes)
   {
       this._notes=notes;
   }

  

   toString()
   {
       const options ={year: 'numeric', month: 'long', day:'numeric'};
       const empDate=!this.startDate ? "undefinedDate" : this.startDate.toLocaleDateString("en-us",options);

       return "id = " +this.id+ ", name= " +this.name+ ", gender = " +this.gender+ ", profile pic = " +this.profile+ " ,department = "+this.department+ ", salary = " +this.salary+ " ,startDate = "+this.empDate+ ", note= "+this.notes ;


   }
}  