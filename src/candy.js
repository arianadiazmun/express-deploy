import {db} from "./db.Connect.js";
const coll = db.collection('candy');
const toArray = (collection) => collection.docs.map(doc =>({id: doc.id,...doc.data() }))

export async function getAllCandy (req,res) {
try{
    const allCandy = await coll.get();
    res.send(toArray(allCandy));
} catch(err) {
    res.status(500).send(err);

}

 }
