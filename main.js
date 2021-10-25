const LinksSocialMedia = {
  github: 'jakeliny',
  youtube: 'jakelinygracielly',
  facebook: 'Maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
  const social = li.getAttribute('class')
  li.children[0].href=`http://${social}.com/${LinksSocialMedia[social]}`
  
  }
}  

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

fetch(url)
.then(response => response.json())
.then(data =>{
userName.textContent = data.name
userBio.textContent = data.bio 
userLink.href = data.html_url
userImage.src = data.avatar_url
userLogin.textContent = data.login
})
}

getGitHubProfileInfos()

//no .then() nao precisa vc criar funcao e depois execultar ela so criar a funcao anonima. quando tiver 2 argumentos coloca entre aspas (argumento, argumento2) =>{}
//ARROW FUNTIONS
function nomedafuncao(argumento){
  //code
}

argumento => {

}