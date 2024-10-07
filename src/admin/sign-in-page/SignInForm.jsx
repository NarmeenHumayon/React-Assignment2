import './SignInForm.css';
import FormInput from './FormInput';

function SignInForm() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="m-sm-3">
          <form>
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
              placeholder="Enter your password"
            />
            <div className="form-check align-items-center">
              <input
                id="customControlInline"
                type="checkbox"
                className="form-check-input"
                value="remember-me"
                name="remember-me"
                defaultChecked
              />
              <label className="form-check-label text-small" htmlFor="customControlInline">
                Remember me
              </label>
            </div>
            <div className="d-grid gap-2 mt-3">
              <a href="/dashboard" className="btn btn-lg btn-primary">
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
