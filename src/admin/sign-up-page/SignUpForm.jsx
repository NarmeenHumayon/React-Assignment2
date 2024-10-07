import './SignUpForm.css';
import FormInput from './FormInput';

function SignUpForm() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="m-sm-3">
          <form>
            <FormInput
              label="Full name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <FormInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <div className="d-grid gap-2 mt-3">
              <a href="/dashboard" className="btn btn-lg btn-primary">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
