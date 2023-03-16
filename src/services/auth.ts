const addError=(rule:string,message:string)=>{
    (document.querySelector('#'+rule)?.querySelector('.message-error') as HTMLInputElement).innerHTML=message;
    document.querySelector('#'+rule)?.classList.add('error')
}
const removeError=(rule:string)=>{
    (document.querySelector('#'+rule)?.querySelector('.message-error') as HTMLInputElement).innerHTML='';
    document.querySelector('#'+rule)?.classList.remove('error')
}

const isRequire=(rule:string,value:string)=>{
    (value.trim())?removeError(rule):addError(rule,'Vui lòng nhập trường này')
}

const isEmail=(rule:string,value:string)=>{
    (/@gmail\.com$/.test(value))?removeError(rule):addError(rule,'Email không đúng định dạng');
    
}
const isPassword=(rule:string,value:string)=>{
    (value.length>8)?removeError(rule):addError(rule,'Vui lòng nhập mật khẩu trên 8 kí tự');
}

const isKeyUpInput=(rule:string)=>{
    removeError(rule);
}

export {
    addError,removeError,isRequire,isEmail,isPassword,isKeyUpInput
}