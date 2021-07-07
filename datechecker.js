const datechecker =(req,res,next)=>{
    let newdate=new Date()
    let hours= newdate.getHours()
    let day=newdate.getDay()
    if((hours<9 || hours>17)&&((day==6 || day==0))){
        res.send('we are closed')
    }
  else{next()}
}

module.exports = datechecker
