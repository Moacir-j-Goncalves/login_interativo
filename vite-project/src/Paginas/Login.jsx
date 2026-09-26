function Login() {
  return (
    <header>
       <div className="Container-Login">
            <div className="Login-box">

                <h1>login</h1>
                <p>Entre na sua conta</p>

                <form>


                    <div className="Campo">
                           <label htmlFor="E-mail">E-mail</label>

                            <input type="email"
                            name="E-mail"
                            id="email"
                            placeholder="Digite seu E-mail" 
                            
                            />
                        </div>

                       <div>
                        <label htmlFor="Senha">Senha</label>
                        <input type="Senha" 
                        name="Senha" 
                        id="senha" 
                        placeholder="Digite sua senha"/>


                       </div>

                    





                </form>


            </div>

        





       </div>
    </header>
  );
}

export default Login;