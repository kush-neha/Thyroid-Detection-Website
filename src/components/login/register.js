export const Register = () => {
    return (
      <>
        <div className="base-container"></div>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
              <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt=""></img>
          </div>
          <div className="form">
              <div className="form-group">
                  <label htmlFor="username">UserName</label>
                  <input type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Email</label>
                  <input type="email" name="email" placeholder="email" />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="text" name="password" placeholder="password" />
              </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">Register</button>
        </div>
      </>
    );
  };
  