const { Client } = require("pg");

const client = new Client({
  user: "rlyfhepgggygbh",
  password: "290d646387025db9e0bb48c2e360b2bc05ba0ddb7f9ab4d1778e0c9c80c865da",
  host: "ec2-44-208-88-195.compute-1.amazonaws.com",
  port: 5432,
  database: "d1prmtkg2prdv9",
  ssl: {
    rejectUnauthorized: false,
  },
});
client.connect();

module.exports = client;
