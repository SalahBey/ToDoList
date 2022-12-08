let createBtn = document.querySelector('#createList');
let validListBtn = document.querySelector('#validList');
let divContainer = document.querySelector('#container');
let divInput = document.querySelector('#divInput')
let lists = [];
if(localStorage.getItem('lists')){
    lists = JSON.parse(localStorage.getItem('lists'))
} 

function displayList() {
    lists.forEach((listName, index) => {
        let nbList = index+1;
        let div = document.createElement('div');
        div.id = 'divList'+nbList;
        div.className = 'col-5';
        div.innerHTML = 
        ` 
        <div id="list${nbList}" class="my-4 mx-2 card">
            <div class="row card-header align-items-center">
                <input type="text" id="nameList${nbList}" class="col-6 listTitle border-0" name="listTitle" readonly value="${listName.name}">
                <input id="updateList${nbList}" name="updateList${nbList}" class="col-1 offset-3 btnChangeTitle rounded"
                    type="image" src="./public/assets/img/pencil.png">
                    <input id="archiveList${nbList}" name="archiveList${nbList}" class="col-1 btnArchiveTitle rounded"
                    type="image" src="./public/assets/img/archives.png">

                <input id="deleteList${nbList}" name="deleteList${nbList}" class="col-1 btnDel btnDeleteList rounded" type="image"
                    src="./public/assets/img/trash.png">
            </div>
            <div class="row flex-column card-body rounded-bottom">
                <div class="col elementList">
                    <div class="row elementItem align-items-center">
                        <input type="text" id="listElement" class="col-6 card-text m-0 listElement" name="listElement" required placeholder="Ajouter élément">
                        <input name="changeElementText" id="changeElementText"
                            class="col-1 offset-4 btnChangeElementText rounded" type="image"
                            src="./public/assets/img/pencilelement.png">
                        <input name="deleteElementText" id="deleteElementText"
                            class="col-1 btnDeleteElementText rounded" type="image"
                            src="./public/assets/img/trashelement.png">
                    </div>
                </div>
                <div class="row flex-row mt-2">
                    <input name="addElement" id="addElement" class="col-1 btnAddElement rounded" type="button"
                    value="+">
                    <p class="col addElementText">Ajouter un élément</p>
                </div>
            </div>
        </div>`;
        divContainer.appendChild(div);
        
    });
}
displayList();


function deleteList() {
    let btnListDelete = document.querySelectorAll('.btnDel');
    btnListDelete.forEach((btnDel, index) => {
        btnDel.addEventListener('click', () => {
            let cpt = index+1;
            let divDelete = document.getElementById('divList'+cpt);
            divDelete.remove();
            lists.splice(index,1);  
            localStorage.setItem('lists', JSON.stringify(lists)); 
        });    
    })
}
deleteList();

function validList() {
    let list = document.querySelectorAll('.listTitle');
    let nbList = parseInt(list.length) + 1;
    let div = document.createElement('div');
    div.id = 'divList'+nbList;
    div.className = 'col-5';
    div.innerHTML = 
    ` 
    <div id="list${nbList}" class="my-4 mx-2 card">
        <div class="row card-header align-items-center">
            <input type="text" id="nameList${nbList}" class="col-6 listTitle border-0" name="listTitle" placeholder="Ajouter un titre">
            <input id="updateList${nbList}" name="updateList${nbList}" class="col-1 offset-3 btnChangeTitle rounded"
                type="image" src="./public/assets/img/pencil.png">
            <input id="archiveList${nbList}" name="archiveList${nbList}" class="col-1 btnArchiveTitle rounded"
                type="image" src="./public/assets/img/archives.png">
            <input id="deleteList${nbList}" name="deleteList${nbList}" class="col-1 btnDel btnDeleteList rounded" type="image"
                src="./public/assets/img/trash.png">
        </div>
        <div class="row flex-column card-body rounded-bottom">
            <div class="col elementList">
                <div class="row elementItem align-items-center">
                    <input type="text" id="listElement" class="col-6 card-text m-0 listElement" name="listElement" required placeholder="Ajouter élément">
                    <input name="changeElementText" id="changeElementText"
                        class="col-1 offset-4 btnChangeElementText rounded" type="image"
                        src="./public/assets/img/pencilelement.png">
                    <input name="deleteElementText" id="deleteElementText"
                        class="col-1 btnDeleteElementText rounded" type="image"
                        src="./public/assets/img/trashelement.png">
                </div>
            </div>
            <div class="row flex-row mt-2">
                <input name="addElement" id="addElement" class="col-1 btnAddElement rounded" type="button"
                value="+">
                <p class="col addElementText">Ajouter un élément</p>
            </div>
        </div>
    </div>`;
    divContainer.appendChild(div);
    let input = document.getElementById(`nameList${nbList}`);
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            let value = input.value;
            input.setAttribute('value', `${value}`);
            input.removeAttribute('placeholder');
            input.setAttribute('readonly', '');
            var lsValue = {
                    id: nbList,
                    name: value,
                    subList : []
                }
            lists.push(lsValue);  
            localStorage.setItem('lists', JSON.stringify(lists)); 
        }
    });
 
    deleteList();
}

validListBtn.addEventListener('click', validList);
