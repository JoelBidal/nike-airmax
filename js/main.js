var state = 1;
console.log(state); //SACAR
function adelante(){
    if(state < 3) state ++;
    else state = 1;

    if (state == 1){
        show1();
        }
    
    if (state == 2){
        show2();        
    }

    if (state == 3){
        show3();        
    }
    console.log(state);
}


function atras(){
    if(state > 1 && state <= 3 ) state --;
    else state = 3;
    console.log(state); //SACAR
    if (state == 1){
        show1();
    }
    
    if (state == 2){
        show2();
    }
    if (state == 3){
        show3();
    }
}

function show1(){
    // imagen zapatillas
    document.getElementById('shoe-1').style.display='none';
    document.getElementById('shoe-2').style.display='block';
    document.getElementById('shoe-3').style.display='none';
    // modelo zapatillas
    document.getElementById('model-shoes').style.display='none';
    document.getElementById('model-shoes-2').style.display='block';
    document.getElementById('model-shoes-3').style.display='none';
    // descripcion zapatillas
    document.getElementById('description').style.display='none';
    document.getElementById('description-2').style.display='block';
    document.getElementById('description-3').style.display='none';
}

function show2(){
    // imagen zapatillas
    document.getElementById('shoe-1').style.display='none';
    document.getElementById('shoe-2').style.display='none';
    document.getElementById('shoe-3').style.display='block';
    // modelo zapatillas
    document.getElementById('model-shoes').style.display='none';
    document.getElementById('model-shoes-2').style.display='none';
    document.getElementById('model-shoes-3').style.display='block';
    // descripcion zapatillas
    document.getElementById('description').style.display='none';
    document.getElementById('description-2').style.display='none';
    document.getElementById('description-3').style.display='block';
}

function show3(){
    // imagen zapatillas
    document.getElementById('shoe-1').style.display='block';
    document.getElementById('shoe-2').style.display='none';
    document.getElementById('shoe-3').style.display='none';
    // modelo zapatillas
    document.getElementById('model-shoes').style.display='block';
    document.getElementById('model-shoes-2').style.display='none';
    document.getElementById('model-shoes-3').style.display='none';
    // descripcion zapatillas
    document.getElementById('description').style.display='block';
    document.getElementById('description-2').style.display='none';
    document.getElementById('description-3').style.display='none';
}