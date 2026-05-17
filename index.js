import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8081;

app.get('/', (req, res)=>{
    return res.json({msg:'Hello from the server v4'})
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})