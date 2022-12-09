let createBtn = document.querySelector('#createList');
let validListBtn = document.querySelector('#validList');
let divContainer = document.querySelector('#container');
let divArchived = document.querySelector('#divArchived');
let divInput = document.querySelector('#divInput')
let lists = [];
let subLists = [];
if(localStorage.getItem('lists')){
    lists = JSON.parse(localStorage.getItem('lists'))
} 
function displayList() {
   
    lists.forEach((listName, index) => {
        let archived = lists[index].archived;
        if(archived === false){
            let nbList = index+1;
            let div = document.createElement('div');
            div.id = 'divList'+nbList;
            div.className = 'col-12 col-lg-6';
            div.innerHTML = 
            ` 
            <div id="list${nbList}" class="my-4 card">
                <div class="d-flex justify-content-between card-header align-items-center">
                    <input type="text" id="nameList${nbList}" class="listTitle border-0" name="listTitle" disabled readonly value="${listName.name}">
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
                            <input type="text" id="listElement${nbList}" class="subListTitle card-text m-0 listElement" name="listElement${nbList}" disabled readonly value="${listName.subList}">
                            <div class="d-flex justify-content-around">
                                <input name="changeElementText${nbList}" id="changeElementText${nbList}"
                                    class="btnChangeElementText mx-lg-2 rounded" type="image"
                                    src="./public/assets/img/pencilelement.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            divContainer.appendChild(div);
        }else {
            let nbList = index+1;
            let div = document.createElement('div');
            div.id = 'divList'+nbList;
            div.className = 'col-12 col-lg-6';
            div.innerHTML = 
            ` 
            <div id="list${nbList}" class="my-4 card archived">
                <div class="d-flex justify-content-between card-header align-items-center">
                    <input type="text" id="nameList${nbList}" class="listTitle border-0" name="listTitle" disabled readonly value="${listName.name}">
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
                            <input type="text" id="listElement${nbList}" class="subListTitle card-text m-0 listElement" name="listElement${nbList}" disabled readonly value="${listName.subList}">
                            <div class="d-flex justify-content-around">
                                <input name="changeElementText${nbList}" id="changeElementText${nbList}"
                                    class="btnChangeElementText mx-lg-2 rounded" type="image"
                                    src="./public/assets/img/pencilelement.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            divArchived.appendChild(div);
        }
        
        
    });
}
displayList();

function archivedList() {
    lists.forEach((list,index)=> {
        let nbList = index+1;
        let inputTitle = document.getElementById(`nameList${nbList}`);
        let inputElement = document.getElementById(`listElement${nbList}`);
        let btnArchived = document.querySelectorAll(".btnArchiveTitle");
        if(lists[index].archived === false){
            btnArchived.forEach((btnArchive, indexBtn) => {
                btnArchive.addEventListener('click', () => {
                    let cpt = indexBtn+1;
                    let valueElement = inputElement.value
                    let valueTitle = inputTitle.value;
                    let divArchivedRemove = document.getElementById('divList'+nbList);
                    var lsValue = {
                        id: cpt,
                        name: valueTitle,
                        subList : valueElement,
                        archived : true
                    }
                    lists[index] = lsValue;  
                    localStorage.setItem('lists', JSON.stringify(lists)); 
                    divArchivedRemove.remove();
                    let divArchive = document.createElement('div');
                    divArchive.id = 'divList'+nbList;
                    divArchive.className = 'col-12 col-lg-6';
                    divArchive.innerHTML = 
                    ` 
                    <div id="list${nbList}" class="my-4 card archived">
                        <div class="d-flex justify-content-between card-header align-items-center">
                            <input type="text" id="nameList${nbList}" class="listTitle border-0" name="listTitle" disabled readonly value="${list.name}">
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
                                    <input type="text" id="listElement${nbList}" class="subListTitle card-text m-0 listElement" name="listElement${nbList}" disabled readonly value="${list.subList}">
                                    <div class="d-flex justify-content-around">
                                        <input name="changeElementText${nbList}" id="changeElementText${nbList}"
                                            class="btnChangeElementText mx-lg-2 rounded" type="image"
                                            src="./public/assets/img/pencilelement.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    divArchived.appendChild(divArchive);
                })
            })
        }
    })
    lists.forEach((list,index) => {
        let nbList = index+1;
        let inputTitle = document.getElementById(`nameList${nbList}`);
        let inputElement = document.getElementById(`listElement${nbList}`);
        let btnArchived = document.querySelectorAll(".btnArchiveTitle");
        if(lists[index].archived === true) {
            btnArchived.forEach((btnArchive, indexBtn) => {
                btnArchive.addEventListener('click', () => {
                    let cpt = indexBtn+1;
                    let valueElement = inputElement.value
                    let valueTitle = inputTitle.value;
                    let divArchivedRemove = document.getElementById('divList'+cpt);
                    var lsValue = {
                        id: cpt,
                        name: valueTitle,
                        subList : valueElement,
                        archived : false
                    }
                    lists[index] = lsValue;  
                    localStorage.setItem('lists', JSON.stringify(lists)); 
                    divArchivedRemove.remove();
                    let nbList = index+1;
                    let div = document.createElement('div');
                    div.id = 'divList'+nbList;
                    div.className = 'col-12 col-lg-6';
                    div.innerHTML = 
                    ` 
                    <div id="list${nbList}" class="my-4 card">
                        <div class="d-flex justify-content-between card-header align-items-center">
                            <input type="text" id="nameList${nbList}" class="listTitle border-0" name="listTitle" disabled readonly value="${list.name}">
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
                                    <input type="text" id="listElement${nbList}" class="subListTitle card-text m-0 listElement" name="listElement${nbList}" disabled readonly value="${list.subList}">
                                    <div class="d-flex justify-content-around">
                                        <input name="changeElementText${nbList}" id="changeElementText${nbList}"
                                            class="btnChangeElementText mx-lg-2 rounded" type="image"
                                            src="./public/assets/img/pencilelement.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    divContainer.appendChild(div);
                })
            })
                
        }
    })
}
archivedList();

function updateList(){
    lists.forEach((list,index)=> {
        let btnListUpdate = document.querySelectorAll('.btnChangeTitle');

        btnListUpdate.forEach((btnUpdate, index) => {
            btnUpdate.addEventListener('click', () => {
                let cpt = index+1;
                let inputTitle = document.getElementById(`nameList${cpt}`);
                inputTitle.removeAttribute('value');
                inputTitle.setAttribute('placeholder','Entrez un nouveau titre')
                let inputElement = document.getElementById(`listElement${cpt}`);
                let valueElement = inputElement.value
                inputTitle.removeAttribute('readonly');
                inputTitle.removeAttribute('disabled');
                
                inputTitle.addEventListener('focusout', () => {
                    let valueTitle = inputTitle.value;
                    inputTitle.setAttribute('value', `${valueTitle}`);
                    inputTitle.removeAttribute('placeholder');
                    inputTitle.setAttribute('readonly', '');
                    inputTitle.setAttribute('disabled', '');
                        var lsValue = {
                                id: cpt,
                                name: valueTitle,
                                subList : valueElement,
                                archived : false
                            }
                        lists[index] = lsValue;  
                        localStorage.setItem('lists', JSON.stringify(lists)); 
                    });
                });
            });    
        })
        let btnElementUpdate = document.querySelectorAll('.btnChangeElementText');
        btnElementUpdate.forEach((btnUpdate, index) => {
            btnUpdate.addEventListener('click', () => {
                let cpt = index+1;
                let inputTitle = document.getElementById(`nameList${cpt}`);
                let inputElement = document.getElementById(`listElement${cpt}`);
                inputElement.removeAttribute('value');
                inputElement.setAttribute('placeholder','Entrez une nouvelle description')
                inputElement.removeAttribute('readonly');
                inputElement.removeAttribute('disabled');
                inputElement.addEventListener('focusout', () => {
                    let valueTitle = inputTitle.value;
                    let valueDesc = inputElement.value;
                    inputElement.setAttribute('value', `${valueDesc}`)
                    inputElement.removeAttribute('placeholder');
                    inputElement.setAttribute('readonly', '');
                    inputElement.setAttribute('disabled', '');
                    var lsValue = {
                            id: cpt,
                            name: valueTitle,
                            subList : valueDesc,
                            archived : false
                        }
                        lists[index] = lsValue;   
                    localStorage.setItem('lists', JSON.stringify(lists));
                });    
            })
        })
}
updateList();

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
                    <input type="text" id="listElement${nbList}" class="subListTitle card-text m-0 listElement" name="listElement${nbList}" placeholder="Ajouter une description">
                    <div>
                        <input name="changeElementText${nbList}" id="changeElementText${nbList}"
                            class="mx-lg-2 btnChangeElementText rounded" type="image"
                            src="./public/assets/img/pencilelement.png">
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    divContainer.appendChild(div);
    let inputTitle = document.getElementById(`nameList${nbList}`);
    let inputDesc = document.getElementById(`listElement${nbList}`);
    inputTitle.addEventListener('focusout', () => {
        let valueTitle = inputTitle.value;
        inputTitle.setAttribute('value', `${valueTitle}`);
        inputTitle.removeAttribute('placeholder');
        inputTitle.setAttribute('readonly', '');
        inputTitle.setAttribute('disabled', '');
        inputDesc.addEventListener('focusout', () => {
            let valueDesc = inputDesc.value;
            console.log(valueDesc);
            inputDesc.setAttribute('value', `${valueDesc}`)
            inputDesc.removeAttribute('placeholder');
            inputDesc.setAttribute('readonly', '');
            inputDesc.setAttribute('disabled', '');
            var lsValue = {
                    id: nbList,
                    name: valueTitle,
                    subList : valueDesc,
                    archived: false
                }
            lists.push(lsValue);  
            localStorage.setItem('lists', JSON.stringify(lists)); 
        });
    });
    
 
    deleteList();
}

validListBtn.addEventListener('click', validList);