const jsonString = `
[
  { "id": 1, "name": "Alice", "age": 25, "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "age": 30, "email": "bob@example.com" },
  { "id": 3, "name": "Charlie", "age": 35, "email": "charlie@example.com" }
]
`;

const users = JSON.parse(jsonString);

const new_users = users.map((user) => {
    const {email, ...rest} = user;
    return rest;
})
console.log(new_users);