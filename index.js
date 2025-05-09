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


function TimeLog(freelancerName,projectDetails,logs){
    this.freelancerName = freelancerName
    this.projectDetails = projectDetails
    this.logs = logs
}


// You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.

function order_management(customer,items,status){
 this.customer = customer
 this.items = items
 this.status = status
}
order_management.prototype.totalCost = function(){
    let cost = 0;
    for (const item of this.items){
        cost += item.quantity * item.unitPrice
    }
    return cost
}
order_management.prototype.updateStatusBasedOnPayment = function(){
    switch(paymentMethod){
        case 'Mpesa':
        case  'cash':
            this.status = paid
        break;
        case 'credit card':
            this.status = pending
            break;
            default:
             console.log('not allowed')

    }
}
order_management.prototype.orderUrgency = function(){
    switch(urgency){
        case 'paid':
        console.log(`it's urgent`)
        break;
        case 'pending':
            console.log('medium')
        break;
        default:
            console.log('low')
    }
}
const constumerDetails = {
    name:'Jane',
    email : "customer@gmail.com"
}
const itemsOrdered= [
    { productName: "crips", quantity: 5, unitPrice: 200 },
    { productName: "lotion", quantity: 1, unitPrice: 2250 },
    {productName:"soap",quantity:5,unitPrice:300}
  ];

  const order = new order_management(customerDetails,itemsOrdered,'paid')
  console.log(order.itemsOrdered())
  console.log(order.orderUrgency())



