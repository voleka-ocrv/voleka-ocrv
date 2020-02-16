function switchColor(obj) {
    let color = obj.id;
    console.log(`На входе: obj= ${obj}, color= ${color}`);
    // let value = document.getElementById(color).value;
    // let id = document.getElementById(color).id;    
    // console.log(`value= ${value}, id= ${id}`);
    if (color === 'redButton'){
        console.log("red branch");
        document.getElementById(color).value = 'blueButton';
        document.getElementById(color).id = 'blueButton';        
    }
    else if (color === 'blueButton'){
        console.log("blue branch");
        document.getElementById(color).value = 'redButton';
        document.getElementById(color).id = 'redButton'; 
    }
}
