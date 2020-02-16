function switchColor(obj) {
    let color = obj.id;
    console.log(`На входе: obj= ${obj}, color= ${color}`);
    let value = document.getElementById(color).value;
    let id = document.getElementById(color).id;    
    console.log(`value= ${value}, id= ${id}`);

    if (color === 'redButton'){
        console.log("red branch");
        value = 'orangeButton';
        id = 'orangeButton';        
    }
    else if (color === 'orangeButton'){
        value = 'redButton';
        id = 'redButton'; 
    }
}
