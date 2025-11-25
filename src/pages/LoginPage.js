export default function LoginPage() {
  return (
    <section className="login-page">
      <h1>👋 Welcome Back!</h1>
      <p className="subtitle">Login to your Kids Audio Story Library account</p>

      <form className="login-form">
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>

        <p className="signup-link">
  Don’t have an account? <a href="/signup">Sign Up</a>
</p>

      </form>
    </section>
  );
}
