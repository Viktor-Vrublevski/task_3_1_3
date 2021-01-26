function create() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const role= document.getElementById('role').value;
    let user = {
        name: name,
        surname: surname,
        age: age,
        username: email,
        password: password,
        role: role

    }
    console.log(user);
    fetch('/admin/create_User', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(user),
    }).then(response => {
        console.log(response.text());
    });
}