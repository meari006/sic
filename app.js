const form = document.querySelector("#search-form");
const query = document.querySelector("#query");
const message = document.querySelector("#search-message");

document.querySelector("#year").textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const idea = query.value.trim();
  if (!idea) return;

  // Search is intentionally not simulated: the verified text index is not connected yet.
  message.textContent = "已收到这个想法。语义检索与可核验文本库仍在建设中，暂时不会返回未经核实的引文。";
  message.classList.add("is-active");
});
