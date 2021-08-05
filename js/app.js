const profileWrapper = document.querySelector('#profiles');
const path = window.top.location




const profileData = async () => {
     const data = await fetch('../data/dados.json')
          .then(success => success.json())
          .then(success => success)
          .catch(err => console.log(err))


     const profileMap = data.map(profile =>
          `<button class="busca01">
          <div id="${profile.id}" class="flex-contanier cont-respo">
          <ul class="dados1">
          <li class="item"><strong class="desc1">${profile.nome}</strong></li>
          <li class="item"><span class="desc2">${profile.cargo}</span></li>
          </div>
          <img class="avatar1" src="/img/${profile.foto}" alt="">
          </button>`
     )

     console.log(data);

     profileWrapper.innerHTML = profileMapgit 
     return data

}

profileData();


window.onload = () => {
     const buttons = document.querySelectorAll('.busca01')
     buttons.forEach(item => item.addEventListener('click', () => alert(this)))
}