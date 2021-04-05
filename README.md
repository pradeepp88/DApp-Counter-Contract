# Counter-Contract-with-Listen

Application Folder - app </br>
Frontend created using - React and Truffle Drizzle - app/client</br>
Backend created using - Node, Express and Postgres (with Event Listener and call reset) - app/node-postgres</br>
Deployed in local develop network created with Truffle</br>

## To deploy smart contract

`cd app`
`truffle develop`
`compile`
`migrate`
`test`

## To start Frontend - Create a new instance
Disable MetaMask Wallet before starting the app</br>
`cd app/client`
`npm start`

## PostgreSQL Settings
Change `app/node-posgres/db.js` file 

## To start backend

Change the `contractAddress = 0x9c94B4fa4770ce4Ef8517994AB1EEa3Fb0BF963C` line in index.js with the deployed contract address from truffle</br>
`cd app/node-postgres`
`nodemon index.js`

## Test cases for contract
![image](https://user-images.githubusercontent.com/45354395/113525974-f34c8780-9585-11eb-8a76-ee79edaabddb.png)

## Screenshots
![image](https://user-images.githubusercontent.com/45354395/113526525-62c37680-9588-11eb-8235-0fbe2b081eb3.png)

Reset Function called after count reaches 10
![image](https://user-images.githubusercontent.com/45354395/113526698-06ad2200-9589-11eb-92f3-156b33baa06c.png)



