async function login(email, password) {
  const res = await fetch(
    "https://stone-ai-backend-1.onrender.com/api/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    }
  );

  return await res.json();
}
