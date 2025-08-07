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
    const spanPesq = document.getElementById("spanPesq");
    const ResultPesq = document.getElementById("resultadoPesquisa");
    const visibilityResult = document.getElementById("containerInputsResult");
    let i = 0;
    let foundContact = null;

    if (ContactList.length > 0) {

        do {
            const contact = ContactList[i];
            if (contact.name.toLowerCase() === input) {
                foundContact = contact
            }
            i++;
        } while (foundContact === null && i < ContactList.length);
    }
    visibilityResult.style.visibility = "visible";
    if (foundContact){
      spanPesq.innerHTML = "Contatos Encontrados:";
      ResultPesq.innerHTML = foundContact.name + " - " + foundContact.phone;
    } else {
      spanPesq.innerHTML = "Nenhum Contato Encontrado.";
      ResultPesq.innerHTML = "";
    }
});