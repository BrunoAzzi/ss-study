package br.sc.org.sesi.smart.rest.admin;

import br.sc.org.sesi.smart.rest.admin.holder.LoginAdminRequest;
import br.sc.org.sesi.smart.rest.admin.holder.LoginAdminResponse;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Igor on 25/03/2015.
 */
public interface AdminLoginController {

    @RequestMapping("/login_admin")
    @Transactional
    LoginAdminResponse login(@RequestBody LoginAdminRequest request);

}
