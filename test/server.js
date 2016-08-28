import assert from 'assert'
import axios from 'axios'
import { expect } from 'chai'
import '../lib/server.js'

const baseUrl = 'http://localhost:3000'

describe('Node Server', () => {

  it('ping should return 200', () => {
    return axios.get(`${baseUrl}/ping`)
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.data).to.equal('Ping OK!')
      })
  })

  it("should serve index.html", () => {
    return axios.get(baseUrl)
      .then(response =>
        expect(response.status).to.equal(200)
      )
  })

})
