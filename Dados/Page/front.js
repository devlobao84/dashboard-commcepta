//Declarando variavéis globais (id do html)
let inputSearch = null,
     buttonSearch = null,
     panelUser = null,
     panelStatistics = null;

//Carregando os elementos
window.addEventListener('load', () => {
     mapElements();
     fetchUsers();
});

//lendo um arquivo externo com json
async function fetchUsers() {
     const res = await fetch('dados.json');
     const json = await res.json();
     console.log(json);
}






