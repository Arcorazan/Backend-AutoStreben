// Import the express module
import express from 'express';
import cors from "cors";
import generator from './src/api/index.js'; 
import { MikroORM } from '@mikro-orm/postgresql';
// Create an instance of the express application
const app = express();
// Specify a port number for the server
const port = 5000;
// Start the server and listen to the port
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', generator());
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

MikroORM.init({
    user: 'postgres',
    password: 'akn123',
    dbName: 'AutoStreben',
    host: 'localhost',
    port: '5432',
    entities: ['./dist/entities']
}).then(()=>{
    console.log('db connected');
})

const data = [
    {
        name: 'salwa mazarin',
        umur: 20
    },
    {
        name: 'arkan gany',
        umur: 18
    },
    {
        name: 'keefa biasa aja',
        umur: 25
    },
    {
        name: 'arco ganteng',
        umur: 17
    },
]

const data2 = [
    {
        username: 'margarin',
        password: 'blueband123',
        name: 'salwa mazarin',
        age: 20,
        address: 'dignitas academy'
    },
    {
        username: 'arkangaming',
        password: 'gany456',
        name: 'arkan gilette',
        age: 17,
        address: 'duren sawit, kandang sapi'
    },
    {
        username: 'keefnotalt',
        password: 'gambling789',
        name: 'keefa biasa',
        age: 26,
        address: 'las vegas'
    },
    {
        username: 'arcorzn',
        password: 'akane154',
        name: 'arco ganteng',
        age: 17,
        address: 'AEon mall'
    },
]

//membuat API
app.get('/data',(req,res) => {
    //Send the data array as a JSON response
    res.status(500).json({
        message:'error haha'
    });
});

app.get("/data/:name", (req, res) => {
    // mengambil data dari url menggunakan req.params
    const name = req.params.name
    console.log(name)
    // mencari data dengan nama yang sama dengan di url
    const dataSpecific = data.filter((x)=> x.nama == name)
    res.status(200).json(dataSpecific);
  });

  app.post("/data", (req, res) => {
    const dataDariUser = req.body
    res.status(201).json(`nama saya ${dataDariUser.name}, umur saya ${dataDariUser.umur}`);
   });

   //put
   app.put('/data/:name', (req,res) => {
    //ambil name dari url
    const name = req.params.name
    //ambil name baru dari body
    const dataDariUser = req.body

    //cari data dengan name yg sesuai
    const index = data.findIndex((val) => val.name == name)

    if(index < 0){
        res.status(404).json({message: 'data gk ada'})
    }
    //ganti data tsb dengan name baru
    console.log(dataDariUser, name)
    data[index].name = dataDariUser.name

    res.status(201).json(data[index]);
   });

   app.delete('/data/:name', (req,res) => {
    //ambil name dari url
    const name = req.params.name

    //cari data dengan name yg sesuai
    const index = data.findIndex((val) => val.name == name)

    if(index < 0){
        res.status(404).json({message: 'data gk ada NIH'})
    }
    //hapus data
    data.splice(index,1)

    res.status(200).json(data);
   });

   //API data 2
app.get('/data',(req,res) => {
    //Send the data array as a JSON response
    res.status(500).json({
        result: data2
    });
});

//post data 2
app.post("/data", (req, res) => {
    const dataDariUser = req.body
    res.status(201).json(
        `username: ${dataDariUser.username}, 
        password: ${dataDariUser.password},
        name: ${dataDariUser.name},
        age: ${dataDariUser.age},
        address: ${dataDariUser.address}`);
   });