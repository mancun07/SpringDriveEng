import { MongoClient } from "mongodb";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op8yb.mongodb.net/JACKETS?retryWrites=true&w=majority`

// API для POST запроса

const handler = async(req, res) => {
    if (req.method === 'POST') {
        const client = await MongoClient.connect(url);
        const db = client.db();
        const articlesCollection = db.collection('articles2');
       

        const newObj = {
            image: req.body.image,
            title: req.body.title,
            content: req.body.content,
            fullcontent: req.body.fullcontent,
            date: req.body.date,
            audioisrequired: req.body.audioisrequired,
            audiotitle: req.body.audiotitle,
            videoisrequired:req.body.videoisrequired,
            videolink:req.body.videolink
        }

        const newArticle = await articlesCollection.insertOne(newObj);
        res.status(201).json(newArticle);
        client.close();

    }
}


export default handler;

// id, image, title, description, date