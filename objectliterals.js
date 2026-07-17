var ob = ["sai", "sanath", 70];
var ob1 = {
  firstName: "sai",
  lastName: "sanath",
  Age: 70,
};
// console.log(ob1.lastName+""+ ob1.firstName)
// console.log(ob1.Age)
// console.log(ob1["Age"]);

// for(var h in ob1)
// {
//     console.log(ob1[h])
// }

var person = {
  firstName: "Harry",
  lastName: "Potter",
  age: 30,
  gender: "male",
  skill: "ReactJS",
  expertise: "Beginner",
};

console.log(person.firstName)
console.log(person.lastName)
console.log(person.firstName+" "+person.lastName)
if(person.age>=18)
{
console.log("true")
}
else
    console.log("false")

var marks = {
  "maths": 34,
  "english": 56,
  "science": 32,
  "hindi": 75,
  "social science": 65,
};

for(let subject in marks){
    console.log(subject);
    console.log(marks[subject]);
}

for(let subject in marks){
    console.log(marks[subject]);
}

for(let subject in marks)
{
    console.log(subject);
}

let count =0;
for(let subject in marks){
    count++;
}
console.log(count);

let sum =0;
for(let subject in marks){
    sum+=marks[subject];
}

let percentage = (sum/500)*100;
console.log(percentage);

for(let subject in marks){
    if(marks[subject]>35){
        console.log(subject);
    }
}