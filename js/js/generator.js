async function generate() {
  const prompt = document.getElementById("prompt").value;
  const lang = document.getElementById("lang").value;
  const token = localStorage.getItem("token");

  const res = await fetch(
    "https://stone-ai-backend-1.onrender.com/api/generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        prompt,
        language: lang
      })
    }
  );

  const data = await res.json();
  document.getElementById("result").innerText = data.result;
}
