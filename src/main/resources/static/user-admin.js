fetch('/admin/getUser')
    .then(response=> {
        response.json().then(data => {
            let user = data;
            let roles = user.roles;
            let h_role = '';
            for (let i = 0; i < roles.length; i++) {
                let role = roles[i].role;
                h_role = h_role + '<span>' + role.substring(5, role.length) +
                    ' </span>';
            }
            let html = '<tr>'
                + '<td>' + user.id + '</td>'
                + '<td>' + user.username + '</td>'
                + '<td>' + user.name + '</td>'
                + '<td>' + user.surname + '</td>'
                + '<td>' + user.age + '</td>'
                + '<td>' + h_role + '</td>'
                + '</tr>';
            document.getElementById('email_admin').innerHTML = user.username;
            document.getElementById('user-admin-roles').innerHTML = h_role;
            document.getElementById('user-admin').innerHTML = html;
        })
    });