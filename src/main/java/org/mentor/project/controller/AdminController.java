package org.mentor.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



@Controller
@RequestMapping("/admin")
public class AdminController {


    @GetMapping(value = "/users")
    public String tableWithUser() {
        return "table";
    }

    @GetMapping(value = "/create")
    public String createUser() {
        return "create";
    }

    @GetMapping(value = "/user-admin")
    public String pageUserAdmin() {
        return "user-admin";
    }

}

