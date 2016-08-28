import http from 'http'
import assert from 'assert'

import '../lib/server.js'

describe('Node Server', () => {

  it('should return 200', done => {
    http.get('http://127.0.0.1:3000', res => {

      assert.equal(200, res.statusCode)

      res.setEncoding('utf8')
      res.on("data", body => {
        assert.equal("Hello World", body)
        done()
      })
    })
  })

})
