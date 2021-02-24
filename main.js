const btnSend = document.querySelector('.sendForm');
const num = /[0-9]/;
const letter = /[A-Za-zА-Яа-яЁё]/;

function request(method, url, body){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            return
        };
    });
    
    xhr.open(method, url, true);
    xhr.send(JSON.stringify(body));
};

window.onload = () => {
    btnSend.addEventListener('click', event => {
        event.preventDefault
        const name = document.querySelector('.name')
        const age = document.querySelector('.age')
        body = { 
            name: name.value,
            age:  age.value,
        };

        let formName = document.forms["person"]["name"].value;
        let formAge = document.forms["person"]["age"].value;
        if(formName.match(letter) && formAge.match(num)) {
            request('POST', '/registration', body);
        } else {
            alert('Need fill correct (Latin name and age in numbers)')
        }
        
    });
};



