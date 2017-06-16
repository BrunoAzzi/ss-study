package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.common.ManagerType;
import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.models.Manager;
import com.google.gson.Gson;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MvcResult;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.MOCK)
@WebAppConfiguration
public class ConstructionControllerTest_IT extends BaseControllerTest_IT {

    @Test
    public void registerConstruction_whenAllMandatoryDataAreValid() throws Exception {
        MvcResult result = mockMvc.perform(post("/constructions")
                .content(getConstructionRequestJson("name - test","cep - test","address - test",
                        "status - test", "description - test","highlightUrl - test",
                        "logoUrl - test","ceiUrl - test","ceiCode - test"))
                .contentType(contentType))
                .andExpect(status().isCreated())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String constructionName = jsonObject.getJSONObject("construction").get("name").toString();
        Assert.assertEquals("Should return the expected name when register construction is succeed.",
                "name - test",constructionName);
    }

    @Test
    public void registerConstruction_whenNameConstructionIsEmpty() throws Exception {
        MvcResult result = mockMvc.perform(post("/constructions")
                .content(getConstructionRequestJson("","cep - test","address - test",
                        "status - test", "description - test","highlightUrl - test",
                        "logoUrl - test","ceiUrl - test","ceiCode - test"))
                .contentType(contentType))
                .andExpect(status().isUnprocessableEntity())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message, when name is null.","Nome é um campo obrigatório.", errorMessage);
    }

    @Test
    public void registerConstruction_whenStatusConstructionIsEmpty() throws Exception {
        MvcResult result = mockMvc.perform(post("/constructions")
                .content(getConstructionRequestJson("name - test","cep - test","address - test",
                        "", "description - test","highlightUrl - test",
                        "logoUrl - test","ceiUrl - test","ceiCode - test"))
                .contentType(contentType))
                .andExpect(status().isUnprocessableEntity())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message, when status is null.","Status é um campo obrigatório.", errorMessage);
    }

    @Test
    public void updateConstruction_whenAllMandatoryDataAreValid() throws Exception {
        MvcResult result = mockMvc.perform(put("/constructions/1")
                .content(getConstructionRequestJson("new name 3 - test","cep - test","address - test",
                        "", "description - test","highlightUrl - test",
                        "logoUrl - test","ceiUrl - test","ceiCode - test"))
                .contentType(contentType))
                .andExpect(status().isOk())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String constructionName = jsonObject.getJSONObject("construction").get("name").toString();
        Assert.assertEquals("Should return the expected name when register construction is succeed.",
                "new name 3 - test",constructionName);
    }

    private String getConstructionRequestJson(String name, String cep, String address, String status,
                                                String description, String highlightUrl, String logoUrl, String ceiUrl,
                                                String ceiCode) {
        Construction construction = new Construction(name, cep, address, status, description, highlightUrl, logoUrl, ceiUrl, ceiCode);

        Gson gson = new Gson();
        String requestJson = gson.toJson(construction);
        System.out.println("Request: " + requestJson);

        return requestJson;
    }

    private String getManagerRequestJson(ManagerType type, String email, String phone) {
        Manager manager = new Manager(type, email, phone);

        Gson gson = new Gson();
        String requestJson = gson.toJson(manager);
        System.out.println("Request: " + requestJson);

        return requestJson;
    }
}
