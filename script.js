function switchColor(obj) {
    let color = obj.id;
    console.log(`На входе: obj= ${obj}, color= ${color}`);
    // let value = document.getElementById(color).value;
    // let id = document.getElementById(color).id;    
    console.log(`value= ${value}, id= ${id}`);
    if (color === 'redButton'){
        console.log("red branch");
        document.getElementById(color).value = 'orangeButton';
        document.getElementById(color).id = 'orangeButton';        
    }
    else if (color === 'orangeButton'){
        console.log("orange branch");
        document.getElementById(color).value = 'redButton';
        document.getElementById(color).id = 'redButton'; 
    }
}
