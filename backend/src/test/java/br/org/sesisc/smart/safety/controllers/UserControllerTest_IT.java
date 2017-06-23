package br.org.sesisc.smart.safety.controllers;

import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTest_IT extends BaseControllerTest_IT {

    @Ignore("This test will pass only once, or after remove the user 'admin@test.com' from database.")
    @Test
    public void registerUser_whenAllMandatoryDateAreValid() throws Exception {

        MvcResult result = mockMvc.perform(post("/users")
                .content(getUserRequestJson(VALID_EMAIL,VALID_PASSWORD))
                .contentType(contentType))
                .andExpect(status().isCreated())
                .andReturn();
        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String tokenResponse =  jsonObject.getJSONObject("user").get("token").toString();
        String expectedToken = "null";
        Assert.assertEquals("Should return a null token.",expectedToken,tokenResponse);

        String userEmailResponse = jsonObject.getJSONObject("user").get("email").toString();
        Assert.assertEquals("Should return the expected email when the register is succeed.","admin@test.com",userEmailResponse);
    }

    /**
     * This test will pass after create the user: admin@test.com
     * If user is not created, this test will pass in the second attempt.
     * @throws Exception
     */

    @Test
    public void registerUser_whenUserIsAlreadyExisted() throws Exception {

        MvcResult result = mockMvc.perform(post("/users")
                .content(getUserRequestJson(VALID_EMAIL,VALID_PASSWORD))
                .contentType(contentType))
                .andExpect(status().isUnprocessableEntity())
                .andReturn();
        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message when user is already existed.","Usuário já existente.", errorMessage);
    }

    @Test
    public void registerUser_whenEmailHasInvalidRegex() throws Exception {

        MvcResult result = mockMvc.perform(post("/users")
                .content(getUserRequestJson(INCORRECT_EMAIL_REGEX_RULE,VALID_PASSWORD))
                .contentType(contentType))
                .andExpect(status().isUnprocessableEntity())
                .andReturn();
        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message when email has invalid regex rule.","Email não está no formato correto.", errorMessage);
    }
}
