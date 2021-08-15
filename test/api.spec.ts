import request from "supertest";

import app from "../src/app";

describe("GET /api/getRepos", () => {
  it("should return 200 OK", () => {
    return request(app).get("/api/getRepos").expect(200);
  });
});

describe("GET /api/getCommits/GithubStatus/master", () => {
  it("should return 200 OK", () => {
    return request(app).get("/api/getCommits/GithubStatus/master").expect(200);
  });
});
