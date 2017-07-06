package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Task;
import br.org.sesisc.smart.safety.models.User;
import br.org.sesisc.smart.safety.service.StorageService;
import com.google.gson.Gson;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.core.io.Resource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MvcResult;

import java.text.SimpleDateFormat;
import java.util.Date;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.MOCK)
@WebAppConfiguration
public class TaskControllerTest_IT extends BaseControllerTest_IT {

    @MockBean
    private StorageService storageService;

    @MockBean
    private Resource resource;

    /**
     * Register construction
     */

    @Test
    public void registerTask_whenAllMandatoryDataAreValid() throws Exception {

        User user = new User();
        user.setId(1l);
//        user.setName("Tester name");

        MvcResult result = mockMvc.perform(post("/tasks")
                .content(getTaskRequestJson(user, user,new Date().toString(),"Title test","Description test"))
                .contentType(contentType))
                .andExpect(status().isCreated())
                .andReturn();


        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

    }

    @Test
    public void showAllTasks() throws Exception {
        MvcResult result = mockMvc.perform(get("/tasks/1"))
                .andExpect(status().isOk())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

    }

    private String getTaskRequestJson(User author, User responsible, String deadline, String title, String description) {

        Task task = new Task(author, responsible, new SimpleDateFormat("yyyy-MM-dd").format(new Date()), title, description);
        Gson gson = new Gson();
        String requestJson = gson.toJson(task);
        System.out.println("Request: " + requestJson);
        return requestJson;
//        return "{\"id\":0,\"responsible\":{\"id\":1,\"email\":\"admin@test.com\",\"password\":\"$2a$10$MOiliSqwCLI1Q0zmCWKF7ukgMbJXVbOoziTHLc759ZAoG57HVbGnW\",\"active\":true,\"token\":null,\"recoverPassToken\":null,\"role\":null,\"name\":null},\"author\":{\"id\":1,\"email\":\"admin@test.com\",\"password\":\"$2a$10$MOiliSqwCLI1Q0zmCWKF7ukgMbJXVbOoziTHLc759ZAoG57HVbGnW\",\"active\":true,\"token\":null,\"recoverPassToken\":null,\"role\":null,\"name\":null},\"deadline\":\"2017-07-05\",\"title\":\"Title test\",\"description\":\"Description test\",\"attachmentFiles\":[]}";
    }

}
