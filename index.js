 async function  randomusers(){
    let randomuser1 = await fetch('https://randomuser.me/api');
    let newUser = await randomuser1.json();
    let roundUp = newUser.results
    let profile = roundUp.map(user=> `<center><img src="${user.picture.large}"><br><br> <strong>First Name: ${user.name.first}<br>Last Name:${user.name.last}</strong></center>`)
    document.body.innerHTML = profile
} 
 randomusers()
