import './SignUpPage.css';
import SignUpForm from './SignUpForm';

function SignUpPage() {
  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Get started</h1>
                <p className="lead">
                  Start creating the best possible user experience for your customers.
                </p>
              </div>
              <SignUpForm />
              <div className="text-center mb-3">
                Already have an account? <a href="/sign-in">Log In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;
