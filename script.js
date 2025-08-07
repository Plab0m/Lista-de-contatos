const ContactList = [
  { name: "Alice", phone: "123-456-7890" },
  { name: "Bob", phone: "987-654-3210" },
  { name: "Charlie", phone: "555-555-5555" },
  { name: "Diana", phone: "444-444-4444" },
  { name: "Eve", phone: "333-333-3333" },
  { name: "Frank", phone: "222-222-2222" },
];

const BtnPesq = document.getElementById("searchButton");
BtnPesq.addEventListener("click", function () {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  for (let i = 0; i < ContactList.length; i++) {
        const spanPesq = document.getElementById("spanPesq")
        const ResultPesq = document.getElementById("resultadoPesquisa");
        const visibilityResult = document.getElementById("containerInputsResult");
    if (ContactList[i].name.trim().toLowerCase() == input) {
        spanPesq.innerHTML = "Contatos Encontrados:"
        visibilityResult.style.visibility = "visible";
        ResultPesq.innerHTML = ContactList[i].name + " - " + ContactList[i].phone;
      break;
    }
    if (i = ContactList.length) {
        visibilityResult.style.visibility = "visible";
        spanPesq.innerHTML = "Nenhum Contato Encontrado."
        ResultPesq.innerHTML = ""
    }
  }
});
