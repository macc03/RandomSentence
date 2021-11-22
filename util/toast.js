class Toast {
  toast= null;
  constructor() {
    let toast = document.createElement('div');
    toast.style.width = '400px';
    toast.style.padding = '14px 0';
    toast.style.textAlign = 'center';
    toast.style.position = 'fixed';
    toast.style.top = '10px';
    toast.style.opacity = '0';
    toast.style.zIndex = 1000;
    this.toast = toast
  }
  success(message) {
    let toast = this.toast
    toast.style.border = '2px solid rgba(0, 255, 0, .6)';
    toast.style.backgroundColor = 'rgba(0, 255, 0, .3)';
    toast.style.color = 'green';
    toast.innerText = message;
    document.body.appendChild(toast);
    let timer = setInterval(function fn(){
      toast.style.opacity = Number.parseFloat(toast.style.opacity)+ 0.1 + '';
      if (toast.style.opacity === '1') {
        clearInterval(timer);
        setTimeout(() => toast.style.opacity = '0', 1200) ;
        return 
      } 
    }, 80) 
  }
  fail(message) {
    let toast = this.toast;
    toast.style.border = '2px solid rgba(255, 0, 0, .6)';
    toast.innerText = message;
    toast.style.backgroundColor = 'rgba(255, 0, 0, .3)';
    toast.style.color = 'red';
    document.body.appendChild(toast);
    let timer = setInterval(function fn(){
      toast.style.opacity = Number.parseFloat(toast.style.opacity)+ 0.1 + '';
      if (toast.style.opacity === '1') {
        clearInterval(timer);
        setTimeout(() => toast.style.opacity = '0', 1200) ;
        return 
      } 
    }, 80) 
  }
}

export default new Toast()