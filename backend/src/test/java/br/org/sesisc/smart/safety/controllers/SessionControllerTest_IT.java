package br.org.sesisc.smart.safety.controllers;

import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.test.web.servlet.MvcResult;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class SessionControllerTest_IT extends BaseControllerTest_IT {

    @Test
    public void signIn_whenAllMandatoryDateAreValid() throws Exception {

        MvcResult result = mockMvc.perform(post("/sessions")
                .content(getValidUserRequestJson(VALID_EMAIL,VALID_PASSWORD))
                .contentType(contentType))
                .andExpect(status().isOk())
                .andReturn();
        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        int expectedLength = "$2a$10$NSPDkD2TTi2L2zpcQVR1eeiMwYW1hOiZ5yf9uAWyLusu1hOECtEr6".length();
        Assert.assertEquals("Should return a not null token.",expectedLength,jsonObject.getJSONObject("user").get("token").toString().length());

        String expectedEmail = "admin@test.com";
        Assert.assertEquals("Should return the expected email.",expectedEmail,jsonObject.getJSONObject("user").get("email").toString());
    }

    @Test
    public void signIn_whenPasswordIsInvalid() throws Exception {

        MvcResult result = mockMvc.perform(post("/sessions")
                .content(getValidUserRequestJson(VALID_EMAIL,INVALID_PASSWORD))
                .contentType(contentType))
                .andExpect(status().isUnprocessableEntity())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message.","Usuario e/ou senha inválido!", errorMessage);
    }

    @Test
    public void signIn_whenEmailIsInvalid() throws Exception {

        MvcResult result = mockMvc.perform(post("/sessions")
                .content(getValidUserRequestJson(INVALID_EMAIL,VALID_PASSWORD))
                .contentType(contentType))
                .andExpect(status().isUnprocessableEntity())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message.","Usuario e/ou senha inválido!", errorMessage);
    }

}
