let server = require("../app");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion
chai.should();
chai.use(chaiHttp);

describe("/", () => {
  it("It should find a match", (done) => {
    chai
      .request(server)
      .get("/")
      .query({ name: "Mayo Clinic" })
      .end((err, response) => {
        response.body.should.be.a("array");

        done();
      });
  });
});
