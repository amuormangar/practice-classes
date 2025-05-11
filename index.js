// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.
function FeatureToggle (featureName,isEnable,userGroupAccess){
        this.featureName = featureName
        this.isEnable = isEnable
        this.userGroupAccess = userGroupAccess
    }

FeatureToggle.prototype.toggleFeature = function(flag){
   if(this.isEnable){
    this.isEnable = flag
}}
FeatureToggle.prototype.canAccess = function (userRole){
    return this.userGroupAccess.includes(userRole)
}
FeatureToggle.prototype.giveAccess = function (userRole){
    if(this.isEnable = true){
    console.log(`${this.featureName} is enabled`)
    }else {
        console.log(`${this.featureName} is disabled`)
    }
    switch (userRole){
        case 'admin':
        console.log('have access')
        break;

        case 'betaTesters':
            console.log('have access')
            break;

        default:
            console.log('Request access')


    }
}
const James = new FeatureToggle("filter",true,["admin","betaTesters"])
console.log(James)
console.log(James.canAccess())
console.log(James.giveAccess())


// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.
// the input are freelancerName,projectDetails,logs
// create a projectDetails with the name and hourlyRated
// create logs with array of of object with date and hoursWorked
// calculate total earning by multiplying HourlyRated*workedHours
// from log property ,filter range date exceeding 40 


function TimeLog(freelancerName,projectDetails,logs){
    this.freelancerName = freelancerName
    this.projectDetails = projectDetails
    this.logs = logs
}
TimeLog.prototype.totalEarning = function (){
    let totalEarning = 0;
    for(let log of this.logs){
    totalEarning += this.projectDetails.HourlyRated * log.hoursWorked
    return totalEarning
}
return totalEarning
}
TimeLog.prototype.filterLogsByDateRange = function(startDate,endDate){
return this.logs.filter(log =>{const logDate = new Date(log.Date);
    return logDate >= new Date(startDate) && logDate <= new Date(endDate)
})
}
TimeLog.prototype.rangeDateExceeding40Hours = function(weekStartDate){
    const weekEndDate = new Date(weekStartDate);
    weekEndDate.setDate(weekEndDate.getDate()+6);
    const weeklyLogs = this.rangeDateExceeding40Hours(weekStartDate,weekEndDate);
    const totalHours = weeklyLogs.reduce((sum,log)=>
        sum + log.hoursWorked,0)
    if(totalHours > 40){
        return true
    }else{
        return false
    }
}

const freelancerName = 'Alice'
const projectDetails = {name:'Graphic design',HourlyRated:7}
const freelancerlog = [{date:'2025-3-19',hoursWorked:6},
                        {date:'2025-3-20',hoursWorked:9},
                        {date:'2025-3-21',hoursWorked:6},

                        {date:'2025-3-22',hoursWorked:3},
                        {date:'2025-3-23',hoursWorked:2},
                        {date:'2025-3-24',hoursWorked:9},
                        {date:'2025-3-25',hoursWorked:7},
                        {date:'2025-3-25',hoursWorked:5}

]

const freelancer1 = new TimeLog(freelancerName,projectDetails,freelancerlog)
console.log(freelancer1)
console.log(freelancer1.filterLogsByDateRange())
console.log(freelancer1.filterLogsByDateRange())
console.log(freelancer1.totalEarning())


function order_management(customer,items,status){
 this.customer = customer;
 this.items = items;
 this.status = status;
}
order_management.prototype.totalCost = function(){
    let cost = 0;
    for (const item of this.items){
        cost += item.quantity * item.unitPrice
    }
    return cost
};
order_management.prototype.updateStatusBasedOnPayment = function(paymentMethod){
    switch(paymentMethod){
        case 'Mpesa':
        case  'cash':
            this.status = paid
        break;
        case 'credit card':
            this.status = 'pending'
            break;
            default:
             this.status = "pending"

    }
}
order_management.prototype.orderUrgency = function(){
   if(this.status === 'paid'){
    return "it's urgent"
   }else if(this.status === 'pending'){
    return "medium"
   }
   else{
    return 'low'
   }
}
const customerDetails = {
    name:"Jane",
    email : "customer@gmail.com"
}
const itemsOrdered= [
    { productName: "crips", quantity: 5, unitPrice: 200 },
    { productName: "lotion", quantity: 1, unitPrice: 2250 },
    {productName:"soap",quantity:5,unitPrice:300}
  ];

  const order = new order_management(customerDetails,itemsOrdered,'paid')
  console.log(order.orderUrgency())
  console.log(order.updateStatusBasedOnPayment())
  console.log(order.totalCost())


//   In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.

class Employee{
    constructor(id,name,performanceMetrics,feedback){
        this.id = id
        this.name = name
        this.performanceMetrics = performanceMetrics
        this.feedback = feedback
    }
}
Employee.prototype.calculateAverage = function(){

    let metrics = Object.values(this.performanceMetrics);
    const total = metrics.reduce((sum , scores)=>   sum + scores,0)
    return total/metrics.length
};
Employee.prototype.performanceLevel = function (){
    if(this.calculateAverage >= 10){
        return 'excellent performance'
    }else if(this.calculateAverage <10 && this.calculateAverage >=5 ){
      return 'Good performance'
    }else{
        return 'need for improvement'
    }
};

Employee.prototype.addFeedback = function (newFeedback){
    if(newFeedback && typeof newFeedback === 'String'){
        this.feedback.push(newFeedback)
    }
}


const performanceMetrics ={communication:4.9,
                           efficiency:5.6,
                           reliability:3.5}
const employee1 = new Employee(37682,'Jerry',performanceMetrics,['good'])
console.log(employee1)
console.log(employee1.calculateAverage())
console.log(employee1.performanceLevel())

employee1.addFeedback ('good job');
employee1.addFeedback('improve on hospitality');
console.log(employee1.feedback)

// Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.
class Course {
    constructor(title,instructor,student){
        this.title = title
        this.instructor = instructor
        this.students = students
    }
}
Course.prototype.nameOfStudentsCompleted = function(){
    return this.students.filter(student => student.completionStatus === 'completed').map(student => student.name)
 
}
Course.prototype.enrolledStudent = function(){
    const expertiseArea = this.instructor.expertise;
    return this.students.filter(student =>student.expertise === expertiseArea).length
};
Course.prototype.instructorMessage  = function(){
    const studentCount = this.students.length;
    if(studentCount>2){
        return `${this.instructor.name} is managing a large class of ${studentCount} students`
    }else {
        return `${this.instructor} is managing a maximum number of ${studentCount} students`
    }
}
const instructor = {name:'Mercy',expertise:'Computer science'}

const students = [{name:'James',expertise:'Mathematics',completionStatus:'completed'},
                  {name:'Glory',expertise:'Computer science',completionStatus:'incompleted'},
                  {name:'Faith',expertise:'software development',completionStatus:'completed'},
                  {name:'Nancy',expertise:'cybersecurity',completionStatus:'incompleted'},
                  {name:'Jessica',expertise:'Computer science',completionStatus:'completed'},
                  {name:'Jonah',expertise:'Computer science',completionStatus:'incompleted'}

]

const courseYear2025 = new Course('computer science',instructor,students)
console.log(courseYear2025)
console.log(courseYear2025.enrolledStudent())
console.log(courseYear2025.nameOfStudentsCompleted())
console.log(courseYear2025.instructorMessage())
