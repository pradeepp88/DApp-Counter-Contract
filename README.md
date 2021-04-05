# Counter-Contract-with-Listen

Application Folder - app </br>
Frontend created using - React Drizzle - app/client</br>
Backend created using - Express and Postgres - app/node-postgres</br>
Deployed in local blockchain created with Truffle</br>

## To deploy smart contract

`cd app`
`truffle develop`
`compile`
`migrate`
`test`

## To start Frontend - Create a new instance

`cd app/client`
`npm start`

## PostgreSQL Settings
Change `db.js` file 

## To start backend

Change the `contractAddress = 0x9c94B4fa4770ce4Ef8517994AB1EEa3Fb0BF963C` line in index.js with the deployed contract address from truffle</br>
`cd app/node-postgres`
`nodemon index.js`


