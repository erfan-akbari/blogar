import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { typeReducer } from '../../utils/typeReducer'
import { getFetch } from '../../utils/apiFetch'
import { AppContext } from '../../Contexts/ContextApi'
import useForm from '../../Hooks/useForm'
import NavbarV2 from '../../Components/NavbarV2/NavbarV2'
import Footer from '../../Components/Footer/Footer'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function Login() {

  const [users, setUsers] = useState([])
  const [isInUser, setIsInUser] = useState(false)
  const [state, dispatch, allFormValid] = useForm({
    userName: '',
    password: ''
  })

  const appContext = useContext(AppContext)

  const submitLoginForm = (e) => {
    e.preventDefault()

    getFetch('users', setUsers)
    
    if (isInUser) {
      MySwal.fire(
        'لاگین موفقیت آمیز بود',
        'اتنقال به صحفه اصلی',
        'success'
      )
    } else {
      MySwal.fire(
        'فردی با این مشخصات یافت نشد',
        'ثبت نام کنید',
        'error'
      )
    }
  }

  useEffect(() => {

    setIsInUser(Object.entries(users).find(user => user[1].password === state.password))
    isInUser && appContext.login(isInUser[0])

  }, [users])

  return (
    <div className='login'>
      <NavbarV2 />
      <div className="register__wrapper">
        <div className="form">
          <h2 className='__title'>ورود به حساب کاربری</h2>
          <form>
            <div className="mb-3">
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
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">رمز عبور</label>
              <input
                onChange={e => dispatch({
                  type: typeReducer.PASSWORD_TYPE,
                  value: e.target.value
                })}
                value={state.email}
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp" />
              {!state.passwordIsValid && <div id="emailHelp" class="form-text">رمز عبور باید از 8 کاراکتر بیشتر باشد</div>}
            </div>
            <div className="mb-5">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">مرا به خاطر بسپار</label>
            </div>
            <hr />
            <div className="mb-3">
              <Link to={'/blogar/register'}>حساب کاربری ندارید , ثبت نام کنید</Link>
              <hr />
              <Link to={'/blogar/register'}>آیا رمز عبور خود را فراموش کرده اید</Link>
            </div>
            <hr />
            {allFormValid ? (
              <button onClick={e => submitLoginForm(e)} type="submit" className="btn btn-primary mt-3">ورود</button>
            ) : (
              <button disabled type="submit" className="btn btn-danger mt-3" style={{ fontSize: '1.8rem' }}>ورود</button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login