const jwt = require('jsonwebtoken')


exports.encode =(payload,expiry)=>{
    let time ={}
    if(!expiry){
        time['expiresIn'] = '2h'
    }else{
        time['expiresIn'] = expiry
    }

   return  jwt.sign(payload, 'SECERT',time);

}


exports.decode =(token)=>{

  return jwt.decode(token,'SECERT')

}


exports.verify=(token)=>{
    return new Promise((resolve,reject)=>{
        try{


            resolve(jwt.verify(token,'SECERT'))

        }catch(error){
            reject(error)
        }
    })
}