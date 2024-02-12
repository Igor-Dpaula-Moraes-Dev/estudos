
function login(nameElement,senhaElement){
    const name = nameElement.value;
    const senha = senhaElement.value;
   

    if (name.trim() !== '' && name !== null && name !== undefined &&
    senha.trim() !== '' && senha !== null && senha !== undefined) {
    alert(`Bem vindo, ${name}`);

    }else{
    window.alert('Verifique Seu login e Senha  e Tente Novamente');
    }

}
    const nameElement =  document.getElementById('login');
    const senhaElement = document.getElementById('senha');
    const conectarElement = document.getElementById('logar');

    conectarElement.addEventListener('click',function(){
        login(nameElement,senhaElement);
    });