
// function increment() {
//     let count = 0;
//     return function closureBehaviour(){
//         count++;
//         console.log(count);
        
//     }
// }
// let inc=increment();
// inc();
// inc();


// function first(){
//     console.log("First");
// }
//     function second(){
//         console.log("second");
        
//     }
//      function third(){
//         console.log("third");
        
//         second()
//         first()
        
//      }

// third();












    









// function  counter(operation)
// {
   
    
       
//         var count = 0;
       
       
//      return {
    

//        inc : function(){
//         count++;
//         console.log(count);
        
//        },

//        dec : function(){
//         count--;
//         console.log(count);
        
//        },

//        res: function(){
//         count = 0;
//         console.log(count);
        
//        }

//     }
// }

// let counterObject = counter();

// counterObject.inc();
// counterObject.inc();
// counterObject.dec();


// const postmanager = function (){
//     let posts = [];
//     return 
//     {
//         post1 : function addPost(){
//             posts.push("This is my first post")
//         },

//         Comment : function addComment(){
//             posts.push("my comment");
//         }
//     }
// }

// let postObj = postmanager











// const postmanager = ()=>{

//      const posts = []
//      return {
//         addPost : (content) => {
//             let post = {
//                 id : posts.length + 1,
//                 content : content,
//                 comments : []
//             }
//             posts.push(post)
//             //return posts
//             return structuredClone(posts)
//         },

//         addComment : (postId,comment)=>{
//             let foundPost = posts.find((item)) =>{
                
//             }
//         }
//      }

// }