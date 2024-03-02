//set up an express server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('dist'));

app.get('/test', async (req, res) => {
    res.send('Hello World');
    //req.body.class
    var cl = "wizard"
    var url = ""
    if (cl === "wizard"){
        url = "/classes/wizard/levels"
    }
        
    fetch( `https://www.dnd5eapi.co/api${url}`)
        .then(response => response.json())
        .then(data => console.log(data));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
