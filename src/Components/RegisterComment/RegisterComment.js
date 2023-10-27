import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './RegisterComment.css'

function RegisterComment() {
    return (
        <div className='register-comment'>
            <h4 className="register-comment__title">ثبت یک نظر</h4>
            <p className='register-comment__warning'>آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی مشخص شده اند *</p>
            <Form className='register-comment__form'>
                <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                    <Form.Label>نام</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                    <Form.Label>پست الکترونیکی</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                    <Form.Label>لینک وب سایت</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="form-group-100 mb-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>پیام شما</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="form-group-100 mb-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="مرا به خاطر بسپار" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    ثبت نظر
                </Button>
            </Form>
        </div>
    )
}

export default RegisterComment