## API MWC22
------------------------------------------------
> Execute all command in root directory
### Load data to DB
```
$ npm run initDB 
```
### Run api
```
$ npm start
```
### Run api tests
```
$npm run test 
    [output expected]
    > mwc22-reto-backend@0.0.0 test
    > mocha



    Developers       
        CRUD OPERATIONS
    Connected to mongodb at mwc_developers
        ✔ Should add new developer in DB
        ✔ Should Fecth all Developers
    POST /api/v1/developers/createDeveloper 200 47.155 ms - 45
    Response body: { response: 'Developer created successfully' }
    GET /api/v1/developers/list 200 34.358 ms - 262

    Got 2 developers

    2 passing (136ms)
```
### API Endopoints  
1. GET
* Get all Developers <br>
<b>${base_url}/api/v1/developers/list</b><br>

2. POST
* Add new developer in DB<br>
<b>${base_url}/api/v1/developers/createDeveloper</b><br>
POST params: <br>
```
{
    name: string, required,
    email: string, required,
    category: string, required,
    phone: string, required,
    date: data, required
}
``` 