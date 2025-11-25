export default function SignUpPage() {
  return (
    <section className="signup-page">
      <h1>✨ Create Your Account</h1>
      <p className="subtitle">
        Join Kids Audio Story Library and start listening today!
      </p>

      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Account created successfully! 🎧");
        }}
      >
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm password" required />

        <button type="submit">Sign Up</button>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </section>
  );
}
