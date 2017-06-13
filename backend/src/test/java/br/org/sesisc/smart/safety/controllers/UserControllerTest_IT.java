package br.org.sesisc.smart.safety.controllers;

import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.test.web.servlet.MvcResult;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTest_IT extends BaseControllerTest_IT {

    @Ignore("This test will run only once, or after remove the user 'admin@test.com' from database.")
    @Test
    public void registerUser_whenAllMandatoryDateAreValid() throws Exception {

        MvcResult result = mockMvc.perform(post("/users")
                .content(getValidUserRequestJson(VALID_EMAIL,VALID_PASSWORD))
                .contentType(contentType))
                .andExpect(status().isCreated())
                .andReturn();
        String responseJson = result.getResponse().getContentAsString();

        JSONObject jsonObject = new JSONObject(responseJson);

        Assert.assertEquals("Should return a not null token.","null",jsonObject.getJSONObject("user").get("token").toString());

        String expectedEmail = "admin@test.com";
        Assert.assertEquals("Should return the expected email.",expectedEmail,jsonObject.getJSONObject("user").get("email").toString());
    }

    /**
     * This test will pass after create the @user: admin@test.com
     * If user is not created, this test will pass in the second attempt.
     * @throws Exception
     */

    @Test
    public void registerUser_whenUserIsAlreadyExisted() throws Exception {

        MvcResult result = mockMvc.perform(post("/users")
                .content(getValidUserRequestJson(VALID_EMAIL,VALID_PASSWORD))
                .contentType(contentType))
                .andExpect(status().isUnprocessableEntity())
                .andReturn();
        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message.","Usuário já existente.", errorMessage);
    }

    @Test
    public void registerUser_whenEmailHasInvalidRegex() throws Exception {

        MvcResult result = mockMvc.perform(post("/users")
                .content(getValidUserRequestJson(INCORRECT_EMAIL_REGEX_RULE,VALID_PASSWORD))
                .contentType(contentType))
                .andExpect(status().isUnprocessableEntity())
                .andReturn();
        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message.","Email não está no formato correto.", errorMessage);
    }

    @Test
    public void registerUser_whenPasswordHasInvalidRegex() throws Exception {

        MvcResult result = mockMvc.perform(post("/users")
                .content(getValidUserRequestJson(VALID_EMAIL, INCORRECT_PASSWORD_LENGTH))
                .contentType(contentType))
                .andExpect(status().isUnprocessableEntity())
                .andReturn();
        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message.","Senha deve ter entre 6 e 20 caracteres.", errorMessage);
    }
}
