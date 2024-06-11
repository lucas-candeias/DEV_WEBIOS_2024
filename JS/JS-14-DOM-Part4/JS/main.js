// Busca pelos elementos do Formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

// Método querySelector
const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Método addEventListener
//Metodo addEventListener substitui o evento onclick por exempl
//existem dois parametros, o primeiro é o tipo de ecento que vc quer fazer, o segundo parametro é a função que vc vai chamar
myForm.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(e) {
    //preventDefault impede que a ação ocorra normalmente
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
    // alert('Por favor, preencha os dados.');
    //classList cria a classe error /atribui a classe a msg
    msg.classList.add('error');
    msg.innerHTML = 'Por favor, preencha os dados.';
    //timeout de 3000 milisegundos
    setTimeout(() => msg.remove(), 3000);
    } else {
    // console.log('sucess');
    const li = document.createElement('li');
    li.appendChild(
    document.createTextNode(
    `${nameInput.value} : ${emailInput.value} : ${horario.value}`
    )
    );
    userList.appendChild(li);
    // Limpa o formulário
    nameInput.value = '';
    emailInput.value = '';
    horario.getElementsByTagName('option')[0].selected = 'selected';
    nameInput.focus(); //Coloca o foco no elmento
    }
    }

    // Validando e-mail
emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
    // alert('Por favor, insira um e-mail válido.');
    msg_email.classList.add('error');
    msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
    setTimeout(() => msg.remove(), 3000);
    }
    });