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
  const input = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const spanPesq = document.getElementById("spanPesq");
  const ResultPesq = document.getElementById("resultadoPesquisa");
  const visibilityResult = document.getElementById("containerInputsResult");

  for (const contact of ContactList) {
    if (contact.name.toLowerCase().trim() === input) {
      spanPesq.innerHTML = "Contato Encontrado:";
      ResultPesq.innerHTML = `${contact.name} - ${contact.phone}`;
      break;
    } else {
      spanPesq.innerHTML = "Nenhum Contato Encontrado.";
      ResultPesq.innerHTML = "";
    }
  }

  visibilityResult.style.visibility = "visible";
});
