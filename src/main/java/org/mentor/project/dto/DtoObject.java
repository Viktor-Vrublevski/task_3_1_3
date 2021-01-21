package org.mentor.project.dto;

import org.mentor.project.model.User;

import java.util.List;

public class DtoObject {
    private User user;
    private List<User> userList;

    public DtoObject(User user, List<User> userList) {
        this.user = user;
        this.userList = userList;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }
}
