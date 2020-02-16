function switchColor(obj) {
    let color = obj.id;
    console.log(`На входе: obj= ${obj}, id= ${color}`);
    let value = document.getElementById('redButton').value;
    let id = document.getElementById('redButton').id;    
    if (color === 'redButton'){
        value = 'orangeButton';
        id = 'orangeButton';        
    }
    else if (color === 'orangeButton'){
        value = 'redButton';
        id = 'redButton'; 
    }
}
