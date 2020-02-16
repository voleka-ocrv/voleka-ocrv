function switchColor(obj) {

    // alert( 'Всем привет!' );
    let id = obj.id;
    // alert(obj);
    console.log(id);
    if (id === 'redButton'){
        document.getElementById('redButton').value = 'orangeButton';
        document.getElementById('redButton').id = 'orangeButton';
        console.log(`after switch red-orange id= ${document.getElementById('redButton').id}`);
    }
    else if (id === 'orangeButton'){
        document.getElementById('orangeButton').value = 'redButton';        
        document.getElementById('orangeButton').id = 'redButton';
        console.log(`after switch orange-red id= ${id}`);
    }
}
