import './index.css';
const Login = () => {
  return (
    <>
      <div className="container-fluid login-page">
        <div className="row">
          <div className="col text-center">
            <h4 className="mb-5 text-white">ورود |ثبت نام</h4>
            <div className="card">
              <div className="card-header bg-white">
                <h5 className="login-card-title"> Technoshop </h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="inputContainer">
                    <p className="login-label mt-3">
                      {' '}
                      لطفا شماره موبایل یا ایمیل خود را وارد کنید
                    </p>
                    <input className="form-control my-5" />
                    <a
                      onClick={loginUser}
                      type="submit"
                      className="btn btn-danger text-center py-2 login-btn w-100"
                    >
                      ورود
                    </a>
                  </div>
                </form>
                <p className="form-sub-text mt-5 text-primary">
                  ورود شما به معنای پذیرش شرایط تکنوشاپ وقوانین حریم‌ خصوصی است
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  function loginUser(e) {
    e.preventDefault();
    console.log('submited !');
  }
};

export default Login;
