var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server=require('../app');
let should = chai.should();
chai.use(chaiHttp);


describe('Developers', () => {
    describe('CRUD OPERATIONS', () => {
        let developer = {
            'name': 'León López Cabañas', 
            'email': 'leon@gmail.com',
            'category': 'backend',
            'phone': '666-888-777',
            'date': 'Mar 4, 2022'
        }    
        
        it('Should add new developer in DB', (done) => {
            chai.request(server)
                .post('/api/v1/developers/createDeveloper')
                .send(developer)
                .end((err, res) =>{
                    res.should.have.status(200);
                    console.log('Response body:', res.body);
                });
                done();
        });

        it('Should Fecth all Developers', (done) => {
            chai.request(server)
            .get('/api/v1/developers/list')
            .end((err, result) => {
                result.should.have.status(200);
                console.log('Got', result.body.developersData.length, 'developers');
            });
            done();
        });

    });
})