import assert from 'assert'
import { expect } from 'chai'

const webdriverio = require('webdriverio');

const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

const client = webdriverio.remote(options)

import '../lib/server.js'

const baseUrl = 'http://localhost:3000'

describe('Node Server', () => {

  before(() => {
    return client.init()
  })

  after(() => {
    client.end()
  })

  it('ping should return 200', () => {
    return client.url(baseUrl)
      .getTitle()
      .then(title => assert.equal("Hello World", title))
      .getText("body")
      .then(bodyText => expect(bodyText).to.contain("A very simple HTML5 page"))
      //.saveScreenshot('hello.png')
  }).timeout(10000)

})
