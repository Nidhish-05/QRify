import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.render("index.ejs", );
})

app.post("/generate", async(req, res)=>{
    const protocol = req.protocol;
    const host = req.get('host');
    const address = `${protocol}://${host}/`; 
    const url = await req.body.url;
    function qrcodemaker(url){
        var svg_string = qr.imageSync( url , { type: 'svg' });
        res.render("index.ejs", {
            qrCode: svg_string,
            url: req.body.url,
            address: address
        }); 
    }
    qrcodemaker(url);
})

app.listen(port, ()=>{
    console.log(`Running Server on port: ${port}`);
})