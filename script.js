function switchColor(obj) {
    let id = obj.id;
    console.log(`На входе: obj= ${obj}, id= ${id}`);
    if (id === 'redButton'){
        // document.getElementById('redButton').value = 'orangeButton';
        // document.getElementById('redButton').id = 'orangeButton';        
        let value = document.getElementById('redButton').value;
        id = document.getElementById('redButton').id;
        console.log(`after switch red-orange: value= ${value} id= ${id}`);
    }
    // else if (id === 'orangeButton'){
    //     document.getElementById('orangeButton').value = 'redButton';        
    //     document.getElementById('orangeButton').id = 'redButton';
    //     console.log(`after switch orange-red id= ${id}`);
    // }
}
