const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'PK-Thinkpad',
  database: 'my_database',
  password: 'root',
  port: 5432,
});

pool.query('SELECT * FROM countereventcalls ORDER BY id ASC;', (error, results) => {
    if (error) {
    return console.error('Error executing query', error.stack);
    }
    console.log(results.rows);
})

const getContractEvents = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM countereventcalls ORDER BY id ASC;', (error, results) => {
        if (error) {
        console.error('Error executing query', err.stack);
        reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createContractEvent = (body) => {
    return new Promise(function(resolve, reject) {
      const { event_data } = body
      pool.query('INSERT INTO countereventcalls (event_data) VALUES ($1);', [event_data], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new Contract Event has been logged into db: ${results.rows[0]}`)
      })
    })
  }
  const deleteContractEvent = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM countereventcalls WHERE id = $1;', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Contract Event with ID: ${id} deleted`)
      })
    })
  }
  
  
  module.exports = {
    getContractEvents,
    createContractEvent,
    deleteContractEvent,
  }


