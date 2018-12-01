(async function() {
  const data = await fetch("index.json").then(a => a.json());
  const html = JSON.stringify(data, null, 2).split("").map(a => `<span>${a}</span>`).join("");
  document.querySelector("body > pre").innerHTML = html;
})();
