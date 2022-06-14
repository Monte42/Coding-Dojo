var btn = document.getElementById('add-btn'),
    my_list = document.getElementById('my_list');

function add_to_list(){
    var new_list_item = document.createElement('li');
    var item_val = document.getElementById('add').value;
    var new_item = document.createTextNode(item_val);
    new_list_item.appendChild(new_item)
    
    my_list.appendChild(new_list_item);
    console.log(my_list);
}