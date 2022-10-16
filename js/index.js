
const form = document.getElementById("form");
const mensagem = document.getElementById('mensagem');
const incr = document.getElementById("incremento");
const showMessage = document.getElementById("mensagemCodificada");
const codigo = document.getElementById("codigo");

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const cifraCesar = (action, mensagem, incr, printout) => {

  if (action === "decodificar") alphabet.reverse();

  let msg = mensagem.split('');
  var result = [];
  msg.forEach(char => {
    let indexAlphabet = alphabet.indexOf(char);

    if (indexAlphabet === -1) result.push(char);
    else {
      //index do char codificado
      let indexCod = (indexAlphabet + parseInt(incr)) % 26;
      result.push(alphabet[indexCod]);
    }
  });

  printout.value = result.join('');
}

const cod64 = (action, mensagem, printout) => {
  var encondedMessage;
  action === 'codificar' ? encondedMessage = btoa(mensagem) : encondedMessage = atob(mensagem);

  printout.value = encondedMessage;
}

const handleSubmit = (e) => {
  e.preventDefault();

  const action = document.querySelector('input[name="action"]:checked');

  if (codigo.value === "cifracesar") return cifraCesar(action.value, mensagem.value, incr.value, showMessage);
  return cod64(action.value, mensagem.value, showMessage);
}

//show increment input
const showIncrementInput = (evt) => {
  var incrementDiv = document.getElementsByClassName("incr");
  incrementDiv[0].classList.toggle('show');
}

const decideButtonText = (evt) => {
  var button = document.getElementById("submitButton");

  if (evt.target.value === "codificar") return button.value = "Codificar Mensagem!";

  return button.value = "Decodificar Mensagem!";
}

//I problably could have done this using css only
const radios = document.getElementsByClassName('actionRadios');
Array.from(radios).forEach(action => action.addEventListener('change', decideButtonText));

//add eventListener to codigo so we can show the increment input
codigo.addEventListener('change', showIncrementInput);


form.addEventListener('submit', handleSubmit);