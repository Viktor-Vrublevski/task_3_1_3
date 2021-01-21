package org.mentor.project.security.handler;

import org.mentor.project.model.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication auth) throws IOException {
        User user = (User) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        if (user.getRoles().size() > 1) {
            response.sendRedirect("/admin/users");
        } else {
            response.sendRedirect("/user");
        }

    }
}
