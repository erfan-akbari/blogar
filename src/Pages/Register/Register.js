import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { typeReducer } from '../../utils/typeReducer'
import { postFetch } from '../../utils/apiFetch'
import { AppContext } from '../../Contexts/ContextApi'
import useForm from '../../Hooks/useForm'
import NavbarV2 from '../../Components/NavbarV2/NavbarV2'
import Footer from '../../Components/Footer/Footer'

import './Register.css'

function Register() {

  const appContext = useContext(AppContext)
  const [state, dispatch, allFormValid] = useForm({
    userName: '',
    email: '',
    password: '',
    role: 'ADMIN'
  })

  const submitRegisterForm = (e) => {
    e.preventDefault()

    let alertValue = {
      title: 'ثبت نام با موقیت انجام شد',
      subTitle: 'انتقال به صحفه اصلی',
      icon: 'success'
    }

    let userData = {
      userName: state.userName,
      email: state.email,
      password: state.password,
      role: state.role
    }

    postFetch('users', userData, alertValue, appContext.login)

    dispatch({
      type: typeReducer.CLEAR_TYPE
    })
  }

  return (
    <div className='register'>
      <NavbarV2 />
      <div className="register__wrapper">
        <div className="form">
          <h2 className='__title'>ثبت نام</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">نام کاربری</label>
              <input
                onChange={e => dispatch({
                  type: typeReducer.USERNAME_TYPE,
                  value: e.target.value
                })}
                value={state.userName}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp" />
              {!state.userNameIsValid && <div id="emailHelp" class="form-text">نام کاریری باید از 8 کاراکتر بیشتر باشد </div>}
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label">رمز عبور</label>
              <input
                onChange={e => dispatch({
                  type: typeReducer.PASSWORD_TYPE,
                  value: e.target.value
                })}
                value={state.password}
                type="password"
                className="form-control"
                id="exampleInputPassword1" />
              {!state.passwordIsValid && <div id="emailHelp" class="form-text">رمز عبور باید از 8 کاراکتر بیشتر باشد</div>}
            </div>
            <div className="mb-5">
              <label htmlFor="exampleInputEmail1" className="form-label">ایمیل</label>
              <input
                onChange={e => dispatch({
                  type: typeReducer.EMAIL_TYPE,
                  value: e.target.value
                })}
                value={state.email}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text" style={{ color: 'green' }}>این فیلد اختیاری است</div>
            </div>
            <div className="mb-3">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">مرا به خاطر بسپار</label>
            </div>
            <hr />
            <div className="mb-4">
              <Link to={'/blogar/login'}>ورود به حساب کاربری</Link>
              <hr />
              <Link to={'/blogar/register'}>آیا رمز عبور خود را فراموش کرده اید</Link>
            </div>
            <hr />
            {allFormValid ? (
              <button onClick={e => submitRegisterForm(e)} type="submit" className="btn btn-primary mt-3">ثبت نام</button>
            ) : (
              <button disabled type="submit" className="btn btn-danger mt-3" style={{ fontSize: '1.8rem' }}>ثبت نام</button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register