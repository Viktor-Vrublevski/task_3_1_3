fetch('http://localhost:8080/getUser').then(response => {
    response.json().then(data => {
        let user = data;
        let html_roles = '';
        for (let i = 0; i < user.roles.length; i++) {
            let role = user.roles[i];
            html_roles = html_roles + '<span>' + role.role.substring(5, role.role.length) + '</span>';
        }
        let html = '<tr>'
            + '<td>' + user.id + '</td>'
            + '<td>' + user.username + '</td>'
            + '<td>' + user.name + '</td>'
            + '<td>' + user.surname + '</td>'
            + '<td>' + user.age + '</td>'
            + '<td>' + html_roles + '</td>'
            + '</tr>'
        document.getElementById('email-top').innerHTML = user.username;
        document.getElementById('roles').innerHTML = html_roles;
        document.getElementById('user').innerHTML = html;
    });
});