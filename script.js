function switchColor(id) {

    // alert( 'Всем привет!' );
    alert(id.value);
    if (id === 'redButton'){
        document.getElementById('redButton').value = 'orangeButton';
        document.getElementById('redButton').id = 'orangeButton';
    }
    else if (id === 'orangeButton'){
        document.getElementById('orangeButton').value = 'redButton';        
        document.getElementById('orangeButton').id = 'redButton';
    }
}
