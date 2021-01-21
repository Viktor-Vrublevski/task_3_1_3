package org.mentor.project.controller;


import org.mentor.project.dto.DtoObject;
import org.mentor.project.model.Role;
import org.mentor.project.model.User;
import org.mentor.project.service.RoleService;
import org.mentor.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
public class MainRestController {


    @Autowired
    private RoleService roleService;

    @Autowired
    private UserService userService;

    @GetMapping(value = "/admin/getUsers")
    public ResponseEntity<DtoObject> getAllUsers() {
        User user = (User) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        DtoObject dto = new DtoObject(user, userService.getAll());
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping(value = "/admin/getUser")
    @ResponseBody
    public ResponseEntity<User> findUserBId( Long id) {
        User user = (User) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


    @PostMapping(value = "/admin/create_User")
    public void createUser(@RequestBody User user) throws IOException {
        if (user.getRole().isEmpty()) {
            throw new IOException();
        }
        List<Role> roles = new ArrayList<>();
        if (user.getRole().equals("user")) {
            roles.add(roleService.getRole(2));
            user.setRoles(roles);
        }
        if (user.getRole().equals("admin")) {
            roles.add(roleService.getRole(1));
            roles.add(roleService.getRole(2));
            user.setRoles(roles);
        }
        userService.save(user);
    }

    @GetMapping(value = "/getUser")
    public ResponseEntity<User> getOneUser() {
        User user = (User) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping(value = "/admin/update")
    public ResponseEntity<User> update(@RequestBody User user) {

        List<Role> roles = new ArrayList<>();
        if (user.getRole().equals("user")) {
            roles.add(roleService.getRole(2));
            user.setRoles(roles);
        }
        if (user.getRole().equals("admin")) {
            roles.add(roleService.getRole(1));
            roles.add(roleService.getRole(2));
            user.setRoles(roles);
        }
        userService.save(user);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @GetMapping(value = "/user/{id}")
    public ResponseEntity<User> findById(@PathVariable(name = "id") Long id) {
        User user = userService.findById(id).get();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping(value = "/admin/delete")
    public void delete(@RequestBody User user) {
        userService.delete(user);
    }

}
