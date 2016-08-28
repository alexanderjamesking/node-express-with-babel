import assert from 'assert'
import axios from 'axios'
import chai from 'chai'

chai.should()

import '../lib/server.js'

const baseUrl = 'http://localhost:3000'

describe('Node Server', () => {

  it('ping should return 200', () => {
    return axios.get(`${baseUrl}/ping`)
      .then(response => {
        response.status.should.equal(200)
        response.data.should.equal('Ping OK!')
      })
  })

  it("should serve index.html", () => {
    return axios.get(baseUrl)
      .then(response => response.status.should.equal(200))
  })

})
