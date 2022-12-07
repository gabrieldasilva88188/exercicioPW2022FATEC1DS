function numeros(text) {
    var numbers = text.replace(/[^0-9]/g,'');
    return numbers
}

function click(){
    val = numeros(cpf.value)
    tam = cpf.value.length
    tam = tam - 3  
    nv1 = val.substring(9,10)
    nv2 = val.substring(10,11)
    vex = 10
    sum = 0
    if(tam == 11)
    {
        for(i = 0;i < tam-2;i++)
        {
            sub = val.substring(i,i+1)
            inteiro = parseInt(sub)
            sum = sum + (vex * inteiro)
            vex--
        }
        n1 = 11 - (sum%11)
        if(n1 == nv1)
        {
            sum = 0
            vex = 10
            for(i = 1;i < tam-1;i++)
            {
                sub = val.substring(i,i+1)
                inteiro = parseInt(sub)
                sum = sum + (vex * inteiro)
                vex--
            }
            n2 = 11 - (sum%11)
            if(n2 == nv2){
                alert("CPF valido")
            }
            else{
                alert("CPF invalido")
            }
        }
        else
        {
            alert("CPF invalido")
        }
    }
    else
    {
        alert("CPF invalido")
    }
    
    
}
var cpf = document.getElementById("cpf");
var botao = document.getElementById("but");
botao.onclick = click;