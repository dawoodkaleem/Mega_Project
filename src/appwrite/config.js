import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Services {
  client = new Client();
  dataases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.dataases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
}

const service = new Services();
export default service;
