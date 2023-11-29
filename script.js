function generatePassword() {

    const lght = document.getElementById('length').value;
    const psw = document.getElementById('password');

    const low = 'abcdefghijklmnopqrstuvwxyz';
    const up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const num = '0123456789';
    const spec = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let tab = '';
      
    if (document.getElementById('low').checked) {
      tab += low;
    }
    if (document.getElementById('up').checked) {
      tab += up;
    }
    if (document.getElementById('num').checked) {
      tab += num;
    }
    if (document.getElementById('spec').checked) {
      tab += spec;
    }

    if (tab.length === 0) {
        psw.value = '';
        return;
      }
  
    let password = "";

    for (let i = 0; i < lght; i++) {
      const indexRand = Math.floor(Math.random() * tab.length);
      password += tab[indexRand];
    }
  
    psw.value = password;
  }
  
