(function () {
  if (!sessionStorage.length) {
    localStorage.setItem('Z2V0U2Vzc2lvblN0b3JhZ2U=', Date.now().toString());
  }
  window.addEventListener('storage', function (event) {
    if (event.key == 'Z2V0U2Vzc2lvblN0b3JhZ2U=') {
      localStorage.setItem('c2Vzc2lvblN0b3JhZ2U=', JSON.stringify(sessionStorage))
      localStorage.removeItem('c2Vzc2lvblN0b3JhZ2U=');
    } else if (event.key == 'c2Vzc2lvblN0b3JhZ2U=' && !sessionStorage.length) {
      //session storage is empty -> fill it
      let data = JSON.parse(event.newValue);
      for (let key in data) {
        sessionStorage.setItem(key, data[key]);
      }
    }
  })

})();
