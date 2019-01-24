class DB {
  static logUser(username,password){
    return new Promise(function(resolve, reject) {
      let fd = new FormData();
      fd.append('username',username)
      fd.append('password',password)
      let xml = new XMLHttpRequest();
      xml.open('post','php/login.php');
      xml.onreadystatechange = () => {
        if (xml.readyState == 4 && xml.status == 200) {
          resolve(xml.responseText)
        }
      }
      xml.send(fd);
    });
  }
  static checkSession(){
    return new Promise(function(resolve, reject) {
      let xml = new XMLHttpRequest();
      xml.open('post','php/checkSession.php');
      xml.onreadystatechange = () => {
        if (xml.readyState == 4 && xml.status == 200) {
          resolve(xml.responseText)
        }
      }
      xml.send();
    });
  }
}
