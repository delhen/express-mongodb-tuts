import { Router } from "express";
import { getDb } from "../database/connection.js";

const peopleRoutes = Router();

// This section will help you get a list of all the documents.
peopleRoutes.route("/people").get(async function (req, res) {
  const dbConnect = getDb();

  dbConnect
    .collection("people")
    .find({}).limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

export default peopleRoutes;
