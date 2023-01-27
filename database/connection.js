import mongodb from "mongodb";
const { MongoClient } = mongodb;
const connectionString = 'mongodb+srv://delian:P4ssw0rd@mongodbtuts.xqnemnv.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;

const connectToServer = function (onEventCompleted) {
    client.connect((error, database) => {
        if (error || !database) {
            return onEventCompleted(error);
        }

        dbConnection = database.db("mongoDbTuts");
        console.log("Connection to MongoDB success!");
        return onEventCompleted();
    })
}

const getDb = function () {
    return dbConnection;
}

export { connectToServer, getDb }