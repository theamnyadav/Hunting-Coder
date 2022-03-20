
import * as fs from 'fs'

export default function handler(req, res) {
  fs.readFile("blogdata/how to learn js.json",'utf-8',(err,data)=>{
    
  console.log('')
  res.status(200).json(JSON.parse(data))
  
})
}
