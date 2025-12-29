import { useActionState } from "react";

async function loginAction(prevState, formData) {


  
  const email = formData.get("email");
  const password = formData.get("password");

  // Fake API call
  await new Promise((res) => setTimeout(res, 1000));

  if (email === "rk@gmail.com" && password === "1234") {
    return { success: true, message: "Login Successful!" };
  }

  return { success: false, message: "Invalid credentials!" };
}

export default function Form() {
  const [state, action, isPending] = useActionState(loginAction, null);

  return (
    <form action={action}>
      <h2>Login</h2>

      <input name="email" placeholder="Email" required />
      <br />

      <input name="password" type="password" placeholder="Password" required />
      <br />

      <button disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>

      {state && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}
