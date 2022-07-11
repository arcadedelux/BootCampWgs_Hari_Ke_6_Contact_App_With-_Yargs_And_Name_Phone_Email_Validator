
const fs = require('fs')
const validator = require('validator')// const fs =require('fs')

// Inisiasi Node readline
// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

  //error handling membuat folder data apabila tidak ada
  const dirPath='./data'
  if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
  }

//error handling Membuat filecontacts.json jika belum ada
  const dataPath='./data/contacts.json'
  if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8')
  }

  // Fungsi Menanyakan Data dengan readlines module dari node
  // const questions=(ask)=>{
  //   return new Promise((resolve)=>{
  //       rl.question(ask,(data)=>{
  //           resolve(data)
  //       })
  //   })
  // }

//Untuk memasukan data input ke contact.json dengan validasi
 const saveData =(name,phone,email)=>{
    const contact = {name,phone,email}
    const file = fs.readFileSync('data/contacts.json','utf-8')
        const contacts=JSON.parse(file)
        const checkName= contacts.find(e=> e.name === name)
        const checkMobile = validator.isMobilePhone(phone,'id-ID')
        const checkEmail = validator.isEmail(email)
        if(checkName){
          console.log("Maaf Nama Sudah Ada!")
        }
        else if(!checkMobile && !checkEmail){
          console.log("Penulisan Nomer Hp dan Email Salah!")
        }else if(!checkMobile){
         console.log("Silahkan Masukan Format Penulisan Nomer Hand Phone Yang Benar!")
        }else if(!checkEmail){
          console.log("Silahkan Masukan Penulisan Format Email Salah!")
        }else{
          contacts.push(contact)
          fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
          console.log('terimakasih sudah menginput data!')
  }}

        
        

module.exports={questions,saveData}