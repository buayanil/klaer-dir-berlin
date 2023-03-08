export async function fetchData (url = '') {
    const response = await fetch(url);
    const data = await response.json()
    return data.data
  };

export async function putData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response
}

export async function postData(url='', data = {}) {    
    const response = await fetch(url, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

export async function deleteData(url='', _id){
    const response = await fetch(url+_id, {
        method: "DELETE", 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
    })
    return response;
  }
