// MAP METHOD

const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer'
    },
    {
        name: 'bob',
        age: 25,
        position: 'designer'
    },
    {
        name: 'susy',
        age: 30,
        position: 'boss'
    },
]

// return new array
// dos not change the size of original array unlike filter
// uses values from original array when making new one

const ages = people.map((person)=>{
    return person.age;
});

console.log(ages);

const newPeople = people.map((item)=> {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20
    }
})