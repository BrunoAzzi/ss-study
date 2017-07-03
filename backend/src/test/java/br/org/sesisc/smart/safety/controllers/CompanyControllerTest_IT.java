package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Company;
import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.models.enums.ConstructionStatus;
import com.google.gson.Gson;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.MOCK)
@WebAppConfiguration
public class CompanyControllerTest_IT extends BaseControllerTest_IT {

    @Test
    public void updateCompany_whenAllMandatoryAreValid() throws Exception {
        MvcResult result = mockMvc.perform(put("/company/1")
                .content(getCompanyRequestJson("cnpj","corporateName", "fakeName", "cep", 12, "addressComplement",
                        "addressStreet", "urlDomain", true, true, true, 6))
                .contentType(contentType))
                .andExpect(status().isAccepted())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String cnpj = jsonObject.getJSONObject("company").get("cnpj").toString();
        Assert.assertEquals("Should return the expected name when company is updated.",
                "cnpj",cnpj);
    }

    @Test
    public void showCompany_whenCompanyExists() throws Exception {
        MvcResult result = mockMvc.perform(get("/company/1"))
                .andExpect(status().isOk())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String code = jsonObject.getJSONObject("company").get("cnpj").toString();
        Assert.assertEquals("Should return the expected cnpj from the retrieved company.",
                "cnpj",code);
    }

    private String getCompanyRequestJson(String cnpj, String corporateName, String fakeName, String cep, int addressNumber, String addressComplement,
                                         String addressStreet, String urlDomain, Boolean hasSesmt, Boolean hasCipa, Boolean isDesignedCipa, int employerNumber) {
        Company company = new Company(cnpj, corporateName, fakeName, cep, addressNumber, addressComplement, addressStreet, urlDomain, hasSesmt, hasCipa, isDesignedCipa, employerNumber);
        Gson gson = new Gson();
        String requestJson = gson.toJson(company);
        System.out.println("Request: " + requestJson);
        return requestJson;
    }
}
