function update() {
  var select = document.getElementById("city");
  var select = document.getElementById("city");
  var redirect = location.host;

  var execute = `http://${redirect}/src/Pages`;
  // var opcaoTexto = select.options[select.selectedIndex].text;
  var opcaoValor = select.options[select.selectedIndex].value;

 
  console.log(opcaoValor);
  console.log(redirect);
  console.log(execute);

  //verification

  if (opcaoValor === "1") {
    window.location.href = `${execute}/campos.html`;
  }

  if (opcaoValor === "2") {
    window.location.href = `${execute}/conceicao.html`;
  }
  if (opcaoValor === "3") {
    window.location.href = `${execute}/quissama.html`;
  }
  if (opcaoValor === "4") {
    window.location.href = `${execute}/saojoao.html`;
  }
  
}
