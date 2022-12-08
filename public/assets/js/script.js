let createBtn = document.querySelector('#createList');
let validListBtn = document.querySelector('#validList');
let divContainer = document.querySelector('#container');
let divInput = document.querySelector('#divInput')
createBtn.removeAttribute('hidden');
let lists = [];
if(localStorage.getItem('lists')){
    lists = JSON.parse(localStorage.getItem('lists'))
} 

function displayList() {
    lists.forEach((listName, index) => {
        let nbList = index+1;
        let div = document.createElement('div');
        div.id = 'divList'+nbList;
        div.className = 'col-6';
        div.innerHTML = 
        `
        <div id="list${nbList}" class="bg-dark my-2 rounded d-flex justify-content-around">
            <div class="my-2">
                <input type="button" id="archiveList${nbList}" name="archiveList${nbList}" value="archiver">
            </div>
            <div class="my-2"> 
                <p id="nameList${nbList}" class="text-white">${listName.name}</p>
            </div>
            <div class="my-2">
                <input type="button" id="updateList${nbList}" name="updateList${nbList}" value="modifier">
                <input type="button" class="btnDel" id="deleteList${nbList}" name="deleteList${nbList}" value="supprimer">
            </div>
        </div>
        `;
        divContainer.appendChild(div);
    });
}
displayList();




function createList() {
    var input = document.createElement('input');
    input.name = 'name';
    input.id = 'name';
    divInput.appendChild(input);
    createBtn.setAttribute('hidden', '');
    validListBtn.removeAttribute('hidden');
}

function validList() {
    let input = document.getElementById('name');
    let value = input.value;
    let list = document.querySelectorAll('p');
    let nbList = parseInt(list.length) + 1;
    input.remove();
    createBtn.removeAttribute('hidden');
    validListBtn.setAttribute('hidden', '');
    var lsValue = {
            id: nbList,
            name: value,
            subList : []
        }
    lists.push(lsValue);  
    localStorage.setItem('lists', JSON.stringify(lists)); 
    let div = document.createElement('div');
    div.id = 'divList'+nbList;
    div.className = 'col-6';
    div.innerHTML = 
    `
    <div id="list${nbList}" class="bg-dark my-2 rounded d-flex justify-content-around">
        <div class="my-2">
            <input type="button" id="archiveList${nbList}" name="archiveList${nbList}" value="archiver">
        </div>
        <div class="my-2"> 
            <p id="nameList${nbList}" class="text-white">${value}</p>
        </div>
        <div class="my-2">
            <input type="button" id="updateList${nbList}" name="updateList${nbList}" value="modifier">
            <input type="button" class="btnDel" id="deleteList${nbList}" name="deleteList${nbList}" value="supprimer">
        </div>
    </div>
    `;
    divContainer.appendChild(div);
}

let btnListDelete = document.querySelectorAll('.btnDel');
btnListDelete.forEach((btnDel, index) => {
    btnDel.addEventListener('click', () => {
        let cpt = index+1;
        let divDelete = document.getElementById('divList'+cpt);
        console.log(divDelete);
        divDelete.remove();
    });    
})
validListBtn.addEventListener('click', validList);
createBtn.addEventListener('click', createList);


// let listes = 
// [
//     {
//         id: 1,
//         nom: 'Liste de courses',
//         sousListe: [
//             {
//                 id:1,
//                 nom:"Carotte",
//                 check: false,
//             },
//             {
//                 id:2,
//                 nom:"Pain de mie",
//                 check: false,
//             },
//             {
//                 id:3,
//                 nom:"DRAPEU AMERICAIN",
//                 check: false,
//             }
//         ]
//     }
// ]

// console.log(listes);
// console.log(listes[0].sousListe[0].check);