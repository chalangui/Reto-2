function drop(event) {
    let id = event.dataTransfer.getData('text');
    let draggableElement = document.getElementById(id);
    let price = draggableElement.getElementsByClassName("product_price")[0].innerHTML;
    let cartPrice = document.getElementsByClassName('price')[0].textContent ;
    document.getElementsByClassName('price')[0].textContent = parseInt(price) + parseInt(cartPrice)
    console.log(cartPrice);
    let dropzone = event.target;
    draggableElement.insertAdjacentHTML(
        'beforeend',
        `<button onclick="deleteElement(event);" class"button">
            Eliminar
        </button>`
    );
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
}
function deleteElement(event){
    let element = document.getElementById(event.target.parentElement.id);
    let dragablezone = document.getElementById('products');
    element.removeChild(element.lastChild)
    element.style.backgroundColor = '#11f9ce';
    let price = element.getElementsByClassName("product_price")[0].innerHTML;
    let cartPrice = document.getElementsByClassName('price')[0].textContent ;
    document.getElementsByClassName('price')[0].textContent = parseInt(cartPrice) - parseInt(price);
    dragablezone.appendChild(element);

}

function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
      event.currentTarget.style.backgroundColor = 'yellow';
  }
function over(event) {
    event.preventDefault();
}