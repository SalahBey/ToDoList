let createBtn = document.querySelector('#createList');
let validListBtn = document.querySelector('#validList');
let divContainer = document.querySelector('#container');
let divInput = document.querySelector('#divInput')
let lists = [];
let subLists = [];
if(localStorage.getItem('lists')){
    lists = JSON.parse(localStorage.getItem('lists'))
} 
if(localStorage.getItem('lists')){
    subLists = JSON.parse(localStorage.getItem('lists'))
}

function displayList() {
    lists.forEach((listName, index) => {
        let nbList = index+1;
        let div = document.createElement('div');
        div.id = 'divList'+nbList;
        div.className = 'col-12 col-lg-6';
        div.innerHTML = 
        ` 
        <div id="list${nbList}" class="my-4 card">
            <div class="d-flex justify-content-between card-header align-items-center">
                <input type="text" id="nameList${nbList}" class="listTitle border-0" name="listTitle" readonly value="${listName.name}">
                <div class="d-flex justify-content-around">
                    <input id="updateList${nbList}" name="updateList${nbList}" class="mx-lg-3 btnChangeTitle rounded"
                        type="image" src="./public/assets/img/pencil.png">
                    <input id="archiveList${nbList}" name="archiveList${nbList}" class="mx-lg-3 btnArchiveTitle rounded"
                        type="image" src="./public/assets/img/archives.png">
                    <input id="deleteList${nbList}" name="deleteList${nbList}" class="mx-lg-3 btnDel btnDeleteList rounded" type="image"
                        src="./public/assets/img/trash.png">
                </div>
            </div>
            <div class="d-flex flex-column card-body rounded-bottom">
                <div class="elementList">
                    <div class="d-flex justify-content-between elementItem align-items-center">
                        <input type="text" id="listElement" class="subListTitle card-text m-0 listElement" name="listElement" required placeholder="Ajouter élément">
                        <div class="d-flex justify-content-around">
                            <input name="changeElementText" id="changeElementText"
                                class="btnChangeElementText mx-lg-2 rounded" type="image"
                                src="./public/assets/img/pencilelement.png">
                            <input name="deleteElementText" id="deleteElementText"
                                class="btnDeleteElementText mx-lg-2 rounded" type="image"
                                src="./public/assets/img/trashelement.png">
                        </div>
                        
                    </div>
                </div>
                <div class="d-flex align-items-center mt-2">
                    <input name="addElement${nbList}" id="addElement${nbList}" class="btnAddElement rounded" type="button"
                    value=" + ">
                    <p class="addElementText mx-2 pt-3">Ajouter un élément</p>
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
            if(divDelete){
                divDelete.remove();
            }
            lists.splice(index,1);  
            localStorage.setItem('lists', JSON.stringify(lists)); 
        });    
    })
}
deleteList();

function validList() {
    let list = document.querySelectorAll('.listTitle');
    let nbList = parseInt(list.length) + 1;
    let subList = document.querySelectorAll('.subListTitle')
    let nbSubList = parseInt(subList.length) + 1;
    let div = document.createElement('div');
    div.id = 'divList'+nbList;
    div.className = 'col-12 col-lg-6';
    div.innerHTML = 
    ` 
    <div id="list${nbList}" class="my-4 mx-2 card">
        <div class="d-flex card-header justify-content-between align-items-center">
            <input type="text" id="nameList${nbList}" class="listTitle" name="listTitle${nbList}" placeholder="Ajouter un titre">
            <div class="d-flex justify-content-around">
                <input id="updateList${nbList}" name="updateList${nbList}" class="mx-3 btnChangeTitle rounded"
                    type="image" src="./public/assets/img/pencil.png">
                <input id="archiveList${nbList}" name="archiveList${nbList}" class="mx-3 btnArchiveTitle rounded"
                    type="image" src="./public/assets/img/archives.png">
                <input id="deleteList${nbList}" name="deleteList${nbList}" class="mx-3 btnDel btnDeleteList rounded" type="image"
                    src="./public/assets/img/trash.png">
            </div>
        </div>
        <div class="d-flex flex-column card-body rounded-bottom">
            <div class="elementList">
                <div class="d-flex justify-content-between elementItem align-items-center">
                    <input type="text" id="listElement${nbSubList}" class="subListTitle card-text m-0 listElement" name="listElement${nbSubList}" required placeholder="Ajouter élément">
                    <div>
                        <input name="changeElementText${nbSubList}" id="changeElementText${nbSubList}"
                            class="mx-lg-2 btnChangeElementText rounded" type="image"
                            src="./public/assets/img/pencilelement.png">
                        <input name="deleteElementText${nbSubList}" id="deleteElementText${nbSubList}"
                            class="mx-lg-2 btnDeleteElementText rounded" type="image"
                            src="./public/assets/img/trashelement.png">
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center mt-2">
                <input name="addElement${nbList}" id="addElement${nbList}" class="btnAddElement rounded" type="button"
                value=" + ">
                <p class="addElementText mx-2 pt-3">Ajouter un élément</p>
            </div>
        </div>
    </div>`;
    divContainer.appendChild(div);
    let input = document.getElementById(`nameList${nbList}`);
    input.addEventListener('focusout', function (e) {
        let value = input.value;
        input.setAttribute('value', `${value}`);
        input.removeAttribute('placeholder');
        input.setAttribute('readonly', '');
        input.setAttribute('disabled', '');
        var lsValue = {
                id: nbList,
                name: value,
                subList : []
            }
        lists.push(lsValue);  
        localStorage.setItem('lists', JSON.stringify(lists)); 
    });
 
    deleteList();
}

validListBtn.addEventListener('click', validList);
