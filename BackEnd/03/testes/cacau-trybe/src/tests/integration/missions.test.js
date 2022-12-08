const chai = require('chai');
const chaiHttp = require('chai-http');
const {expect} = chai;
chai.use(chaiHttp);
const app = require('../../app');

describe('Rota de missões', function(){
  describe('GET missions', function(){
    it('Retorna uma lista de missões', function(){
      const response = chai.request(app).get('missions');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('missions');
      expect(response.body.missions).to.be.instanceOf(Array);
    })
  })
})