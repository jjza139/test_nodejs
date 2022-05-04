function login(username,password){
    let request = new XMLHttpRequest();
    request.open('POST','http://203.154.71.186/login')
    request.send();
    request.onload = () =>{
        console.log(request);
        if (request.status == 200){
            console.log(JSON.parse(request.response))
        }else{
            console.log('error${request.status}$ {request.statusText}')
        }
    }
}

function getHeader() {
    return {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': '*/*'
    }
}

async function getFetch(url, method, headers, body) {
    try {
        const response = await fetch("http://localhost:9000" + url, {
            method: method,
            headers: headers,
            body: body,
            //mode: 'no-cors', // no-cors, *cors, same-origin
        })
        //console.debug("API/fetch|response=" + response);
        if (response.ok) {
            let data = response
            if (response.headers.get('Content-Type').indexOf('application/json') > -1) {
                data = response.json()
            }
            return data
        } else {
            console.error("Utilities/getFetch|error=" + response.statusText);
            return response.error
            //throw new Error('Something went wrong');
        }
    } catch (err) {
        return err
    }
}



const testget = async () => {
    const url = '/test'
    try {
        let response = await getFetch(url, "GET", getHeader())
        //console.info('response: '+response)
        if (response) {
            console.log(response)
            // setPrivilegeData(response.result)
        }
    } catch (err) {
        console.error('loadListPrivilege|err=' + err)
    }
}

const test = async () => {
    const url = '/'
    try {
        let response = await getFetch(url, "GET", getHeader())
        //console.info('response: '+response)
        if (response) {
            console.log(response)
            // setPrivilegeData(response.result)
        }
    } catch (err) {
        console.error('loadListPrivilege|err=' + err)
    }
}