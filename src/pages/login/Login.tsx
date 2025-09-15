import style from "./Login.module.css";

export function Login() {
  return (
    <div className={style.container}>
      <div className={style.loginPanel}>
        <div className={style.loginHeader}>Login</div>
        <form>
          <div className={style.inputContainer}>
            <label>username</label>
            <div className={style.wrapInput}>
                <svg width="20" height="20" viewBox="0 0 20 20">
                <path fill="#000000" d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z"/>
                </svg>
                <input type="text"></input>
            </div>
          </div>
          <div className={style.inputContainer}>
            <label>password</label>
            <div className={style.wrapInput}>
                <svg width="20" height="20" viewBox="0 0 472 384"><path fill="#000000" d="M249 149h220v86h-42v85h-86v-85h-92q-14 37-47 61t-74 24q-53 0-90.5-37.5T0 192t37.5-90.5T128 64q41 0 74 24t47 61zm-121 86q18 0 30.5-12.5T171 192t-12.5-30.5T128 149t-30.5 12.5T85 192t12.5 30.5T128 235z"/></svg>
                <input type="password"></input>
            </div>
            
          </div>
          <div className={style.buttonContainer}>
            <button>Login</button>
          </div>
        </form>
        <div className={style.textDisplay}></div>
        <div className={style.itemDisplay}></div>
      </div>
    </div>
  );
}

export default Login;
