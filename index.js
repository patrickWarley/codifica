const form = document.getElementById("form");
const mensagem = document.getElementById('mensagem');
const incr = document.getElementById("incremento");
const showMessage = document.getElementById("mensagemCodificada");

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const cifraCesar = (mensagem, incr, printout) => {
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

const cod64 = (mensagem, incr, printout) => {
}

const handleSubmit = (e) => {
  e.preventDefault();

  const codigo = document.querySelector('input[name="codigo"]:checked');

  if (codigo.value === "cifracesar") return cifraCesar(mensagem.value, incr.value, showMessage);

  return cod64(mensagem, incr, showMessage);
}

form.addEventListener('submit', handleSubmit);