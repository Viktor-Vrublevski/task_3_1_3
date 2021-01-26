fetch("/admin/getUsers")
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (dto) {

                let users = dto.userList;
                let man = dto.user;
                let roles = man.roles;
                let h_role = '';
                for (let i = 0; i < roles.length; i++) {
                    let role = roles[i].role;
                    h_role = h_role + '<span>' + role.substring(5, role.length) +
                        ' </span>';
                }
                let html = '';
                let html_role = '';
                for (let i = 0; i < users.length; i++) {
                    let roles = users[i].roles;
                    for (let j = 0; j < roles.length; j++) {
                        let role = roles[j].role;
                        html_role = html_role + '<span>' + role.substring(5, role.length)
                            + ' </span>';
                    }
                    let user = users[i];
                    html = html + '<tr>' +
                        '<td>' + user.id + '</td>' +
                        '<td>' + user.username + '</td>' +
                        '<td>' + user.name + '</td>' +
                        '<td>' + user.surname + '</td>' +
                        '<td>' + user.age + '</td>' +
                        '<td>' + html_role + '</td>' +
                        '<td><button type="button" onclick="getUpdate('+user.id+')" data-toggle="modal" data-target="#editModal"' +
                        '  class="btn btn-info text-light">Edit'
                        + '</button></td>' +
                        '<td><button type="button" onclick="getDelete('+user.id+')" data-toggle="modal" data-target="#deleteModal"' +
                        ' class="btn btn-danger text-light">Delete'
                        + '</button></td></tr>';
                    html_role = '';

                }
                document.getElementById('email_admin_top').innerHTML = man.username;
                document.getElementById('roles').innerHTML = h_role;
                document.getElementById('user_tbody').innerHTML = html;
            });
        }
    })
function getUpdate(id) {
    fetch('/user/'+id).then(response => {
        response.json().then(data => {
            document.getElementById('id').value = data.id;
            document.getElementById('name').value = data.name;
            document.getElementById('surname').value = data.surname;
            document.getElementById('age').value = data.age;
            document.getElementById('email').value = data.username;
            document.getElementById('role').value = data.role;
            document.getElementById('pass').value = data.password;
        })
    })
}
function getDelete(id) {
    fetch('/user/'+id).then(response => {
        response.json().then(data => {
            document.getElementById('id-d').value = data.id;
            document.getElementById('name-d').value = data.name;
            document.getElementById('surname-d').value = data.surname;
            document.getElementById('age-d').value = data.age;
            document.getElementById('email-d').value = data.username;
            document.getElementById('role-d').value = data.role;
            document.getElementById('pass-d').value = data.password;
        })
    })
}
class User{
}
function remove() {
    let user = new User();
    user.id = document.getElementById('id-d').value;
    user.name = document.getElementById('name-d').value;
    user.surname = document.getElementById('surname-d').value;
    user.age = document.getElementById('age-d').value;
    user.username = document.getElementById('email-d').value;
    user.password = document.getElementById('pass-d').value;
    user.role = document.getElementById('role-d').value;
    fetch('/admin/delete', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => console.log(response.text()));
}

function update() {
    let user = new User();
    user.id = document.getElementById('id').value;
    user.name = document.getElementById('name').value;
    user.surname = document.getElementById('surname').value;
    user.age = document.getElementById('age').value;
    user.username = document.getElementById('email').value;
    user.password = document.getElementById('pass').value;
    user.role = document.getElementById('role').value;
    fetch('/admin/update', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => console.log(response.text()));
}