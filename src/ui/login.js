import Footer from "./footer";
import Header from "./header";

function Login(){
    return <>
            <Header/>
            <div className="d-flex align-items-center justify-content-center m-5 p-3">
                <img src="newlogo.png" alt="login little lemon" height="80px"/>
                <span className="header-title">LITTLE LEMON LOGIN</span>
            </div>
            <main className="form-signin P-5 m-5">
            <form>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating mt-1"  style={{zIndex:'-1'}}>
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mt-1"  style={{zIndex:'-1'}}>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check text-start my-3"  style={{zIndex:'-1'}}>
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                </label>
                </div>
                <button className="btn btn-success w-100 py-2 reserve-button" type="submit">SIGN IN</button>
                <p className="mt-5 mb-3 text-body-secondary">©2024</p>
            </form>
            </main>
            <Footer/>
        </>
}
export default Login;