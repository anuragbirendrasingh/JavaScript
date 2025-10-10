
let userSearch = document.getElementById("search")
let buttonTriggered = document.getElementById("triggere")

buttonTriggered.addEventListener("click",()=>{
    let userName = userSearch.value.trim(); //get user input
    if(userName===""){
        alert("please Enter a valid User Name")
        return;
    }
    fetchGithubUser(userName);
})

function fetchGithubUser(username){
    const url = `https://api.github.com/users/${username}`;

    //show loading
    document.getElementById("result").innerHTML=" loading...";

    fetch(url)

    .then(response=>{
        if(!response.ok){
            throw new Error("User Not Found")
        }
        return response.json();
    })

    .then(data=>{
        //show user info
        document.getElementById("result").innerHTML=`
         <img src="${data.avatar_url}" width="100" />
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Bio:</strong> ${data.bio || "No bio available"}</p>
                <p><strong>Followers:</strong> ${data.followers}</p>`;
    })

    .catch(error=>{
        //show error
        document.getElementById("result").innerHTML = `<p style="color: red;">❌ ${error.message}</p>`;
    })

    
}