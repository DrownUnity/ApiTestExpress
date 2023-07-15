const {faker} = require("@faker-js/faker");

const users = [];

for(let i = 0; i < 250; i++){
  users.push({
    id: faker.datatype.uuid(),
    user: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
  })
}

module.exports = users; 
