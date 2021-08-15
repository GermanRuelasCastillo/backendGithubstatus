import { Application, Request, Response } from "express";
const axios = require('axios')

let  _url = 'https://api.github.com/';

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api/getRepos", async (req: Request, res: Response) => {
    try {
      const response = await axios.get(_url+'users/GermanRuelasCastillo/repos')
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(404).json(error);
    }
  });

  app.get("/api/getCommits/:project/:branch", async (req: Request, res: Response) => {
    try {
      const response = await axios.get(_url+'repos/GermanRuelasCastillo/'+req.params.project+'/commits?sha='+req.params.branch);
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(404).json(error);
    }
  });
};