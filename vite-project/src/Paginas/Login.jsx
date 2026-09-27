
import "../Stiles/Login.css";

function Login() {
  return (
    <header>
      <div className="Container-Login">
        <div className="Login-box">

          <h1>Login</h1>
          <p>Entre na sua conta</p>

          <form>

            <div className="Campo">
              <label htmlFor="email">E-mail</label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu E-mail"
              />
            </div>

            <div className="Campo">
              <label htmlFor="senha">Senha</label>

              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Digite sua senha"
              />
            </div>

            <button className="Login" type="button">
              Login
            </button>

          </form>

        </div>
      </div>
    </header>
  );
}

export default Login;
