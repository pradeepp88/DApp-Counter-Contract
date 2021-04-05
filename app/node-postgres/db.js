const Pool = require("pg").Pool;

const pool = new Pool({
    user: "my_user",
    password: "root",
    database: "my_database",
    host: "localhost",
    port: 5432
}
);

module.exports = pool;