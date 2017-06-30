package br.org.sesisc.smart.safety.controllers;

import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MvcResult;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.MOCK)
@WebAppConfiguration
public class CnaeControllerTest_IT extends BaseControllerTest_IT {

    @Test
    public void showCnae() throws Exception {
        MvcResult result = mockMvc.perform(get("/cnaes/1"))
                .andExpect(status().isOk())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String code = jsonObject.getJSONObject("cnae").get("code").toString();
        Assert.assertEquals("Should return the expected code when cnae is retrieved.",
                "0111301",code);
    }

}
