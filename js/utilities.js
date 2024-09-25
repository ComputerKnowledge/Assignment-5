function takeInput(id) {
  const amount = parseFloat(document.getElementById(id).value);
  const balance1 = takeDataFromTag("net-balance");
  if (!isNaN(amount) && amount > 0 && amount <= balance1) {
    my_modal_1.showModal();
    return amount;
  } else {
    alert("Please enter a valid amount");
    return 0;
  }
}
function takeDataFromTag(id) {
  return parseFloat(document.getElementById(id).innerHTML);
}
function addDataToElement(id, amount) {
  document.getElementById(id).innerHTML = takeDataFromTag(id) + amount;
  document.getElementById("net-balance").innerHTML =
    takeDataFromTag("net-balance") - amount + " BDT";
  if (amount > 0) {
    addToHistory(amount, id);
  }
  const allInput = document.getElementsByTagName("input");
  for (let i = 0; i < allInput.length; i++) {
    document.getElementsByTagName("input")[i].value = "";
  }
}
function showSection(id) {
  document.getElementById("history").classList.add("hidden");
  document.getElementById("donation").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
function addToHistory(amount, id) {
  const div1 = document.createElement("div");
  div1.innerHTML = `<div class="p-4 border border-gray-400 m-4 rounded-lg">
                      <p class="font-bold text-xl">
                          ${amount} taka has been donated for ${
    document.getElementById(id + "-heading").innerText
  }
                      </p>
                      <p class="bg-slate-300">${new Date()}</p>
                    </div>`;
  document.getElementById("history").appendChild(div1);
}
