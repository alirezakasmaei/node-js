const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected to Server');
    const db = client.db('TodoApp');

    //insert Document (insertOne())
    db.collection('todos').insertOne({
        text: 'abed',
        knowledge:true
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    //find (find({..}))         =>       select
    // db.collection('Todos').find().toArray().then((doc) => {
    //     console.log(JSON.stringify(doc, undefined,2));
    // }, (err) => {
    //         console.log('Unable to fetch',err);
    // });


    //delete (deleteMany({..}))    =>      deletes all documents
    // db.collection('Users').deleteMany({ text: 'reza' }).then((res) => {
    //     console.log(res);
   
    
    //delete (deleteOne({}))     =>      deletes first document only
    // db.collection('Users').deleteOne({ text: 'abed' }).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log('Unable to Delete', err);
    // });
    
    //delete (findOneAndDelete)

    
    //update
    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID("5d1227148253e42c4420709d")
    // }, {
    //     $set: { text: "bab" },
    //     $inc: { age: 25 }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //         console.log(JSON.stringify(res,undefined,3));
    // });

    client.close();
});