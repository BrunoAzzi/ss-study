package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.models.Floor;
import br.org.sesisc.smart.safety.models.Sector;
import br.org.sesisc.smart.safety.models.enums.ConstructionStatus;
import br.org.sesisc.smart.safety.service.StorageService;
import com.google.gson.Gson;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.core.io.Resource;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMultipartHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.RequestPostProcessor;

import static br.org.sesisc.smart.safety.helpers.FileHelper.PATH_DIR;
import static org.mockito.BDDMockito.then;
import static org.mockito.BDDMockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.MOCK)
@WebAppConfiguration
public class ConstructionControllerTest_IT extends BaseControllerTest_IT {

    @MockBean
    private StorageService storageService;

    @MockBean
    private Resource resource;

    /**
     * Register construction
     */

    @Test
    public void registerConstruction_whenAllMandatoryDataAreValid() throws Exception {

        MvcResult result = mockMvc.perform(post("/constructions")
                .content(getConstructionRequestJson("name - test","cep - test","address - test",
                        ConstructionStatus.IN_PROGRESS.getValue(), "description - test",
                        "ceiCode - test"))
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
                        1, "description - test",
                        "ceiCode - test"))
                .contentType(contentType))
                .andExpect(status().isUnprocessableEntity())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message, when name is null.","Nome é um campo obrigatório.", errorMessage);
    }

    /**
     * Upload files
     */

    @Test
    public void uploadLogo_whenSucceed() throws Exception {
        MockMultipartFile fileLogo = new MockMultipartFile("file", "logo.png", "image/png", "Spring Framework".getBytes());

        when(storageService.store(fileLogo)).thenReturn(PATH_DIR+"/logo.png");

        MockMultipartHttpServletRequestBuilder builder = fileUpload("/constructions/1/logo");
        builder.with(new RequestPostProcessor() {
            @Override
            public MockHttpServletRequest postProcessRequest(MockHttpServletRequest request) {
                request.setMethod("POST");
                return request;
            }
        });

        MvcResult result = mockMvc.perform(builder.file(fileLogo))
                .andExpect(status().isOk())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        System.out.println("Response: " + responseJson);

        then(storageService).should().store(fileLogo);

        JSONObject jsonObject = new JSONObject(responseJson);
        String urlLogo = jsonObject.getJSONObject("construction").getString("logoUrl");
        Assert.assertEquals("Should return the url logo.","/constructions/1/logo", urlLogo);
    }

    @Test
    public void uploadLogo_whenLogoHasInvalidFormat() throws Exception {
        MockMultipartFile fileLogo = new MockMultipartFile("file", "logo.jpg", "image/jpg", "Spring Framework".getBytes());

        MockMultipartHttpServletRequestBuilder builder = fileUpload("/constructions/1/logo");
        builder.with(new RequestPostProcessor() {
            @Override
            public MockHttpServletRequest postProcessRequest(MockHttpServletRequest request) {
                request.setMethod("POST");
                return request;
            }
        });

        MvcResult result = mockMvc.perform(builder.file(fileLogo))
                .andExpect(status().isUnsupportedMediaType())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        System.out.println("Response: " + responseJson);

        JSONObject jsonObject = new JSONObject(responseJson);
        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message, when logo has invalid format.","Arquivo incompatível.", errorMessage);
    }

    @Test
    public void uploadCei_whenSucceed() throws Exception {
        MockMultipartFile fileCei = new MockMultipartFile("file", "cei.pdf", "application/pdf", "Spring Framework".getBytes());

        when(storageService.store(fileCei)).thenReturn(PATH_DIR + "/cei.pdf");

        MockMultipartHttpServletRequestBuilder builder = fileUpload("/constructions/1/cei");
        builder.with(new RequestPostProcessor() {
            @Override
            public MockHttpServletRequest postProcessRequest(MockHttpServletRequest request) {
                request.setMethod("POST");
                return request;
            }
        });

        MvcResult result = mockMvc.perform(builder.file(fileCei))
                .andExpect(status().isOk())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        System.out.println("Response: " + responseJson);

        JSONObject jsonObject = new JSONObject(responseJson).getJSONObject("construction");
        String ceiUrl = jsonObject.getString("ceiUrl");
        Assert.assertEquals("Should return the url logo.","/constructions/1/cei", ceiUrl);

        String ceiFileName = jsonObject.getString("ceiFileName");
        Assert.assertEquals("Should return the url logo.","upload-dir/cei.pdf", ceiFileName);
    }

    @Test
    public void uploadLogo_whenCeiHasInvalidFormat() throws Exception {
        MockMultipartFile fileCei = new MockMultipartFile("file", "logo.png", "image/png", "Spring Framework".getBytes());

        MockMultipartHttpServletRequestBuilder builder = fileUpload("/constructions/1/cei");
        builder.with(new RequestPostProcessor() {
            @Override
            public MockHttpServletRequest postProcessRequest(MockHttpServletRequest request) {
                request.setMethod("POST");
                return request;
            }
        });

        MvcResult result = mockMvc.perform(builder.file(fileCei))
                .andExpect(status().isUnsupportedMediaType())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        System.out.println("Response: " + responseJson);

        JSONObject jsonObject = new JSONObject(responseJson);
        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message, when logo has invalid format.","Arquivo incompatível.", errorMessage);
    }

    /**
     * Update construction
     */

    @Test
    public void updateConstruction_whenAllMandatoryDataAreValid() throws Exception {
        mockMvc.perform(put("/constructions/1")
                .content(getConstructionRequestJson("name - test","cep - test","address - test",
                        1, "description - test","ceiCode - test"))
                .contentType(contentType))
                .andExpect(status().isAccepted())
                .andReturn();

        MvcResult result = mockMvc.perform(put("/constructions/1")
                .content(getConstructionRequestJson("new name - test","cep - test","address - test",
                        ConstructionStatus.FINISHED.getValue(), "description - test","ceiCode - test"))
                .contentType(contentType))
                .andExpect(status().isAccepted())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String constructionName = jsonObject.getJSONObject("construction").get("name").toString();
        Assert.assertEquals("Should return the expected name when register construction is succeed.",
                "new name - test",constructionName);
    }

    /**
     * Create Sectors
     */
    @Test
    public void createSector_whenAllMandatoryAreValid() throws Exception {

        MvcResult result = mockMvc.perform(put("/constructions/1")
                .content(getSectorRequestJson("new Sector"))
                .contentType(contentType))
                .andExpect(status().isAccepted())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson).getJSONObject("construction");

        System.out.println("Response: " + responseJson);

        String sectorName = jsonObject.getJSONArray("sectors").getJSONObject(0).getString("name");

        Assert.assertEquals("Should return the expected name when registration sector is succeed.",
                "new Sector",sectorName);
    }

    @Test
    public void createFloors_whenAllMandatoryAreValid() throws Exception {

        MvcResult result = mockMvc.perform(put("/constructions/1")
                .content(getFloorRequestJson("new Sector", "Floor"))
                .contentType(contentType))
                .andExpect(status().isAccepted())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson).getJSONObject("construction");



        System.out.println("Response: " + responseJson);

        String floorName = jsonObject.getJSONArray("sectors").getJSONObject(0).getJSONArray("floors").getJSONObject(0).getString("name");

        Assert.assertEquals("Should return the expected name when registration sector is succeed.",
                "Floor",floorName);
    }

    @Test
    public void createSectors_whenConstructionIdIsInvalid() throws Exception {

        MvcResult result = mockMvc.perform(put("/constructions/999999")
                .content(getSectorRequestJson("new Sector"))
                .contentType(contentType))
                .andExpect(status().isNotFound())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();

        System.out.println("Response: " + responseJson);

        JSONObject jsonObject = new JSONObject(responseJson);
        String errorMessage = jsonObject.getJSONArray("errors").getJSONObject(0).getString("message");
        Assert.assertEquals("Should return an error message, when logo has invalid format.","Construção não encontrada.", errorMessage);
    }

    private String getConstructionRequestJson(String name, String cep, String address, int status,
                                                String description, String ceiCode) {
        Construction construction = new Construction(name, cep, address,0, "address complement", status, description, ceiCode);
        Gson gson = new Gson();
        String requestJson = gson.toJson(construction).replace("IN_PROGRESS","0").replace("PAUSED","1").replace("FINISHED","2");
        System.out.println("Request: " + requestJson);
        return requestJson;
    }

    private String getSectorRequestJson(String name) {
        Sector sector = new Sector(name);
        sector.setId(1);
        Construction construction = new Construction();
        construction.getSectors().add(sector);

        Gson gson = new Gson();

        String requestJson = gson.toJson(construction);
        System.out.println("Request: " + requestJson);
        return requestJson;
    }

    private String getFloorRequestJson(String sectorName, String floorName) {
        Sector sector = new Sector(sectorName);
        sector.setId(1);
        sector.getFloors().add(new Floor(floorName,floorName.substring(2)));
        Construction construction = new Construction();
        construction.getSectors().add(sector);

        Gson gson = new Gson();

        String requestJson = gson.toJson(construction);
        System.out.println("Request: " + requestJson);
        return requestJson;
    }

}
