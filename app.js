

let ammount = prompt('ammount');
let currency = prompt('currency');

if(ammount == "" || currency == ""){

    alert('All fields are required !');
}else{

    if(currency == 'dollar'){
    console.log(`${ammount} ${currency} = ${ammount *86} BDT`);
    }else if(currency == 'pound'){
        console.log(`${ammount} ${currency} = ${ammount * 155.80} BDT `);
    }
    else if(currency == 'euro'){
        console.log(`${ammount} ${currency} = ${ammount * 155.80} BDT `);
    }
}