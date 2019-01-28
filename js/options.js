// Saves options to chrome.storage

  $("#optionform").submit(function(e)
                    {
    console.log( $("#optionform").serialize() );
    
    var $form = $("#optionform");
    var data = getFormData($form);
    
    console.log(data);
    
    // LOCAL STORAGE
    // localStorage.setItem(storageName, JSON.stringify(data));
    
    return false;
    
  });

// SERIALIZE TO JSON | 
function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

///////////////////////////////////////////////////////////////////////

//function save_options() {
//  var color = document.getElementById('color').value;
//  var likesColor = document.getElementById('like').checked;
//  chrome.storage.sync.set({
//    favoriteColor: color,
//    likesColor: likesColor
//  }, function () {
//    // Update status to let user know options were saved.
//    var status = document.getElementById('status');
//    status.textContent = 'Options saved.';
//    setTimeout(function () {
//      status.textContent = '';
//    }, 750);
//  });
//}
//
//// Restores select box and checkbox state using the preferences
//// stored in chrome.storage.
//function restore_options() {
//  // Use default value color = 'red' and likesColor = true.
//  chrome.storage.sync.get({
//    favoriteColor: 'red',
//    likesColor: true
//  }, function (items) {
//    document.getElementById('color').value = items.favoriteColor;
//    document.getElementById('like').checked = items.likesColor;
//  });
//}
//document.addEventListener('DOMContentLoaded', restore_options);
//document.getElementById('save').addEventListener('click', save_options);

/* MATERIALIZE JS */

$(document).ready(function () {
  $('select').material_select();
});
