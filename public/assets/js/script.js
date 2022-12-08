let btnAddList = document.querySelector('.btnAddList')
let listContainer = document.querySelector('.listContainer')


function createList() {
    listContainer.innerHTML +=
        ` <div class="col-5 m-3 card">
        <div class="row card-header align-items-center">
            <input type="text" id="listTitle" class="col-6 listTitle " name="listTitle" required placeholder="Ajouter titre">
            <input name="changeTitle" id="changeTitle" class="col-1 offset-4 btnUpdateTitle rounded"
                type="image" src="./public/assets/img/pencil.png">
            <input name="deleteList" id="deleteList" class="col-1 btnDeleteList rounded" type="image"
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
    </div>`

    let btnAddElement = document.querySelector('.btnAddElement')
    let elementList = document.querySelector('.elementList')

    function createElement() {
        elementList.innerHTML +=
            `<div class="row elementItem align-items-center">
            <input type="text" id="listElement" class="col-6 card-text m-0 listElement" name="listElement" required placeholder="Ajouter élément">
            <input name="updateElementText" id="updateElementText"
                class="col-1 offset-4 btnUpdateElementText rounded" type="image"
                src="./public/assets/img/pencilelement.png">
            <input name="deleteElementText" id="deleteElementText"
                class="col-1 btnDeleteElementText rounded" type="image"
                src="./public/assets/img/trashelement.png">
        </div>`

    };

    btnAddElement.addEventListener('click', createElement);
    
    
    let btnDeleteElementText = document.querySelector('.btnDeleteElementText')
    let elementItem = document.querySelector('.elementItem')

    function removeElement() {
        elementItem.remove();
    };

    btnDeleteElementText.addEventListener('click', removeElement);

};

btnAddList.addEventListener('click', createList);



