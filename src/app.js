const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9900;
app.use(cors({origin:'*'}));
app.get('/bio',(req,res,next)=> {
    try {
        const details = {
            slackUsername:"4pt3sr",
            backend:true,
            age:22,
            bio:"My name is Makinde Tolulope, I am a backend developer"
        }

        res.status(200).send(details);
    } catch (err) {
        res.status(500).send({message:'Sorry,an error occured'});
    }
})
app.use('*',(req,res)=> {
    res.status(404).send({message:'This endpoint does not exist'})
});

app.listen(PORT,()=> console.log(`Now listening on port ${PORT}`))