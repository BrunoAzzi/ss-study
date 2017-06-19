package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.common.ManagerType;
import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.models.Manager;
import br.org.sesisc.smart.safety.service.StorageService;
import com.google.gson.Gson;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMultipartHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.RequestPostProcessor;
import static org.mockito.BDDMockito.then;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.MOCK)
@WebAppConfiguration
public class ConstructionControllerTest_IT extends BaseControllerTest_IT {

    @MockBean
    private StorageService storageService;

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
    public void uploadLogo_whenSucceed() throws Exception {
        MockMultipartFile fileLogo = new MockMultipartFile("logo", "logo.png", "image/png", "Spring Framework".getBytes());

        MockMultipartHttpServletRequestBuilder builder = fileUpload("/constructions/1/upload/logo");
        builder.with(new RequestPostProcessor() {
            @Override
            public MockHttpServletRequest postProcessRequest(MockHttpServletRequest request) {
                request.setMethod("PUT");
                return request;
            }
        });

        mockMvc.perform(builder.file(fileLogo))
                .andExpect(status().isOk());

        then(storageService).should().store(fileLogo);
    }

    @Test
    public void uploadCei_whenSucceed() throws Exception {
        MockMultipartFile fileCei = new MockMultipartFile("cei", "cei.pdf", "application/pdf", "Spring Framework".getBytes());

        MockMultipartHttpServletRequestBuilder builder = fileUpload("/constructions/1/upload/cei");
        builder.with(new RequestPostProcessor() {
            @Override
            public MockHttpServletRequest postProcessRequest(MockHttpServletRequest request) {
                request.setMethod("PUT");
                return request;
            }
        });

        mockMvc.perform(builder.file(fileCei))
                .andExpect(status().isOk());

        then(storageService).should().store(fileCei);
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
        mockMvc.perform(put("/constructions/1")
                .content(getConstructionRequestJson("name - test","cep - test","address - test",
                        "", "description - test","highlightUrl - test",
                        "logoUrl - test","ceiUrl - test","ceiCode - test"))
                .contentType(contentType))
                .andExpect(status().isOk())
                .andReturn();

        MvcResult result = mockMvc.perform(put("/constructions/1")
                .content(getConstructionRequestJson("new name - test","cep - test","address - test",
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
                "new name - test",constructionName);
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
