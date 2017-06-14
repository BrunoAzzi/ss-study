package br.org.sesisc.smart.safety.controllers;

import com.google.gson.Gson;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;
import java.nio.charset.Charset;
import br.org.sesisc.smart.safety.models.User;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.MOCK)
@WebAppConfiguration
public class BaseControllerTest_IT {

    protected MediaType contentType = new MediaType(MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(),
            Charset.forName("utf8"));

    protected MockMvc mockMvc;

    protected final String VALID_EMAIL = "admin@test.com"; // Email that will be saved for signIn tests.

    protected final String VALID_PASSWORD = "123123"; // Password that will be saved for signIn tests.

    protected final String INVALID_EMAIL = "error@test.com";

    protected final String INVALID_PASSWORD = "passwordNotValid";

    protected final String INCORRECT_EMAIL_REGEX_RULE = "admin@test";

    protected final String INCORRECT_PASSWORD_LENGTH = "123";

    @Autowired
    protected WebApplicationContext webApplicationContext;

    @Before
    public void setup() throws Exception {
        this.mockMvc = webAppContextSetup(webApplicationContext).build();
    }

    protected String getValidUserRequestJson(String email, String password) {
        User user = new User();
        user.setActive(true);
        user.setEmail(email);
        user.setPassword(password);

        Gson gson = new Gson();
        String requestJson = gson.toJson(user);

        return requestJson;
    }
}


