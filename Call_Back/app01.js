
function getDetail(naam,callback){
     console.log('name is :' + naam);
//    return  callback()
callback();
     
}

function callback(){
    console.log("Ask a question ");
    
}

// const ans =  getDetail('anurag',callback);
// console.log(ans());
getDetail('anurag',callback)


      
