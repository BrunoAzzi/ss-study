package br.sc.org.sesi.smart.rest.admin;

import br.sc.org.sesi.smart.rest.admin.holder.LoginAdminRequest;
import br.sc.org.sesi.smart.rest.admin.holder.LoginAdminResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Igor on 4/6/2016.
 */
@RestController
public class AdminLoginControllerImpl implements AdminLoginController {



    @Override
    @RequestMapping("/login_admin")
    @Transactional
    @Secured("ROLE_LOGIN_ADMIN")
    public LoginAdminResponse login(@RequestBody LoginAdminRequest request) {
        LoginAdminResponse response = new LoginAdminResponse();


        response.setSuccess(true);
        /*AdminUser adminUser = adminUserDao.getUserinfoByLogin(request.getLogin());
        response.setSuccess(false);

        if (adminUser != null && adminUser.getPassword().equals(request.getPassword())) {
            response.setSuccess(true);
            response.setRoles(adminUser.getRoles());
        }*/

        return response;

    }
}
