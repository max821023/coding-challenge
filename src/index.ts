import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from 'mongoose';

class CodingChallenge {
  private port = process.env.PORT;
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  connect(): void {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.tdyd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("Mongo works"))
      .catch(err => console.log(err))
  }

  public start(): void {
    this.app.listen(this.port, () =>
      console.log(`Example app listening on port ${this.port}!`)
    );
  }

  public routes(): void {
    this.app.get("/", (req, res) => res.send("juice. Coding Challenge"));
  }

  public config() {
    this.app.set("port", this.port);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }
}

const codingChallenge = new CodingChallenge();
codingChallenge.connect();
codingChallenge.start();
