package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Construction;
import com.google.gson.Gson;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.MOCK)
@WebAppConfiguration
public class ConstructionControllerTest_IT extends BaseControllerTest_IT {


    @Test
    public void create() throws Exception {
        MvcResult result = mockMvc.perform(post("/constructions")
                .content(getConstructionRequestJson("name",1L,"cep","address","status",
                        "description","highlightUrl","logoUrl","ceiUrl","ceiCode"))
                .contentType(contentType))
                .andExpect(status().isCreated())
                .andReturn();
        System.out.println("Request: "+result.getRequest().getAttributeNames());
        System.out.println("Response: "+result.getResponse().getContentAsString());
    }

    private String getConstructionRequestJson(String name, Long cityId, String cep, String address, String status,
                                                String description, String highlightUrl, String logoUrl, String ceiUrl,
                                                String ceiCode) {
        Construction construction = new Construction(name, cityId, cep, address, status, description, highlightUrl,
                logoUrl, ceiUrl, ceiCode);

        Gson gson = new Gson();
        String requestJson = gson.toJson(construction);

        return requestJson;
    }
}
