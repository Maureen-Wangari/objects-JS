//question 1
//A function that returns a new array containing names of the people above 18 years old
function ageAbove18(ages){
    return ages.filter(x => x.age >= 18).map(x => x.name)
};


const people =[
    {name:"Alice", age:17},
    {name:"Eunice", age:22},
    {name:"Charlie", age:14},
    {name:"Max", age:19},
]
console.log(ageAbove18(people));


//question 2
//function that returns an object that groups the products products by category.
function groupCategories(products){
    let categorisedItems =Object.groupBy(products, product=>product.category)
console.log(categorisedItems);
}

const products =[
    {name: 'Laptop', price:1200, category:'Electornics'},
    {name: 'Shirt', price:25, category:'Clothing'},
    {name: 'Headphones', price:80, category:'Electornics'},
    {name: 'Shoes', price:60, category:'Clothing'}
]

groupCategories(products)

//question3 
//a function that returns a new array containing the names of all students whose average score is greater than or equal to 85
function averageScore(marks){
    const averageScore= (marks)=>{
        return marks.reduce((sum,marks)=>sum+marks,0)/marks.length;
    }
    const result= students.filter(students=>
        averageScore(students.marks)>=85)

        const names = result.map(students=>students.name);
        console.log(names);
};


const students =[
    {name:"John", marks:[90,80,85]},
    {name:"Jane", marks:[95,92,88]},
    {name:"Jim", marks:[70,80,75]},
    {name:"Jill", marks:[85,90,84]},
]
averageScore(students)



//question 4
//A function that returns the current age of the car based on the current year and the car's year property
const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };

  function addAgeMethod (car) {
    let currentYear = new Date().getFullYear();
    car.age = (currentYear - car.year);
    return car
   }
    
    console.log(addAgeMethod(car));
    car.displayInfo();