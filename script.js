function switchColor(obj) {

    // alert( 'Всем привет!' );
    let id = obj.id;
    alert(obj);
    if (id === 'redButton'){
        document.getElementById('redButton').value = 'orangeButton';
        id = 'orangeButton';
    }
    else if (id === 'orangeButton'){
        document.getElementById('orangeButton').value = 'redButton';        
        document.getElementById('orangeButton').id = 'redButton';
    }
}
