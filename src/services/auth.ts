import axios from "axios";

const addError=(rule:string,message:string)=>{
    (document.querySelector('#'+rule)?.querySelector('.message-error') as HTMLInputElement).innerHTML=message;
    document.querySelector('#'+rule)?.classList.add('error')
}

const removeError=(rule:string)=>{
    (document.querySelector('#'+rule)?.querySelector('.message-error') as HTMLInputElement).innerHTML='';
    document.querySelector('#'+rule)?.classList.remove('error')
}

const isRequire=(rule:string,value:string)=>{
    if(value.trim()){
        removeError(rule)
        return true;
    }
    else {
        addError(rule,'Vui lòng nhập trường này');
        return false;
    }
}

const isEmail=(rule:string,value:string)=>{
    if(/@gmail\.com$/.test(value)){
        removeError(rule)
        return true;
    }
    else{
        addError(rule,'Email không đúng định dạng');
        return false;

    }
}
const isPassword=(rule:string,value:string)=>{
    if(value.length>6){
        removeError(rule)
        return true;
    }
    else{
        addError(rule,'Vui lòng nhập mật khẩu trên 6 kí tự');
        return false;
    }
}

const isKeyUpInput=(rule:string)=>{
    removeError(rule);
}

const data=[
    {
        username:'admin@gmail.com',
        password:'12345678'
    },
    {
        username:'user@gmail.com',
        password:'87654321'
    }
]
const createData=()=> {
    localStorage.data = JSON.stringify(data);
}

const login = (username: string, password: string) => {
    isEmail('email',username);
    isPassword('password',password)
    if(isEmail('email',username)&&isPassword('password',password)){
        const x = localStorage.getItem("data")||'';
        const data=JSON.parse(x)
        const user=data.find((item: { username: string; })=>item.username===username)
        const pass=data.find((item: { password: string; })=>item.password===password)
        if(user&&pass){
            alert('Đăng nhập thành công')
        }
        else alert('Tài khoản hoặc mật khẩu không đúng')
    }
    
};

export {
    createData,addError,removeError,isRequire,isEmail,isPassword,isKeyUpInput,login
}