const user = [
    {name:"Alice", age:22},
    {name:"Bob", age:17},
    {name:"Charlie", age:19},
];

const new_user = user.map((user)=>{
    user.status = user.age>=19 ? "성인" : "미성년자";
    return user;
})

console.log(new_user);