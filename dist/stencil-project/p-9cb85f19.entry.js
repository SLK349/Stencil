import{r as t,c as s,h as e}from"./p-3fef535d.js";import{f as i}from"./p-b07dd267.js";const a="";const o=a;const c=class{constructor(e){t(this,e);this.loginSucess=s(this,"loginSucess",7);this.loginError=s(this,"loginError",7);this.handleEmailChange=t=>{this.email=t.target.value};this.handlePasswordChange=t=>{this.password=t.target.value};this.handleSubmit=async t=>{t.preventDefault();try{const t=await fetch("http://localhost:3001/api/authenticate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password})});if(!t.ok){throw new Error(await t.text())}const s=await t.json();this.loginSucess.emit(s)}catch(t){this.loginError.emit(t.message)}};this.email="";this.password=""}render(){return e("form",{key:"3841a10ad365720b31af0974bfa40bca0b1adb35",onSubmit:t=>this.handleSubmit(t)},e("label",{key:"7760ddb80e2a82b1beb75398407ade57554f8c00"},"Email"),e("input",{key:"a80e7bc8f31c9a22533fbcf8e6a0c3d588d9557c",type:"email",value:this.email,onInput:t=>this.handleEmailChange(t)}),e("label",{key:"3090044b5d463b3ead5ea6f9fcc12dd91bcc882a"},"Password"),e("input",{key:"a2166fb2cc2fb35398a0f726d2d1c222710e0be0",type:"password",value:this.password,onInput:t=>this.handlePasswordChange(t)}),e("button",{key:"26938e1753d9864cf173431530e1367a8bb78c51",type:"submit"},"Login"))}};c.style=o;const n=":host{display:block}";const h=n;const d=class{constructor(s){t(this,s);this.first=undefined;this.middle=undefined;this.last=undefined}getText(){return i(this.first,this.middle,this.last)}render(){return e("div",{key:"3608fd529e2d32338c4e8b71974e2b5c3bac0968"},"Hello, World! I'm ",this.getText())}};d.style=h;export{c as login_form,d as my_component};
//# sourceMappingURL=p-9cb85f19.entry.js.map