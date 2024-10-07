import './SignInPage.css';
import SignInForm from './SignInForm';

function SignInPage() {
  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome back!</h1>
                <p className="lead">Sign in to your account to continue</p>
              </div>
              <SignInForm />
              <div className="text-center mb-3">
                Don't have an account? <a href="/sign-up">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignInPage;
