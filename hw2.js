const person = {
    name: "David",
    city: "London",
    age: 30,
};

for( key in person){
    if(typeof(person[key]) == "string"){
        person[key] = `${person[key]} (확인됨)`;
    }
}
console.log(person);

const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];

const new_words=[];
for (value of words){
    if(value.length >= 5){
        new_words.push(value);
    }
}

console.log(new_words);