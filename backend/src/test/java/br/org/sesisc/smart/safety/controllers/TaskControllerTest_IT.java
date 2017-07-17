package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Task;
import br.org.sesisc.smart.safety.models.User;
import com.google.gson.Gson;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
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

    /**
     * Register task
     */

    @Test
    public void registerTask_whenAllMandatoryDataAreValid() throws Exception {

        User user = new User();
        user.setId(1l);

        MvcResult result = mockMvc.perform(post("/tasks")
                .content(getTaskRequestJson(user, user, new SimpleDateFormat("yyyy/MM/dd").format(new Date()),"Title test","Description test"))
                .contentType(contentType))
                .andExpect(status().isCreated())
                .andReturn();


        String responseJson = result.getResponse().getContentAsString();
        JSONObject jsonObject = new JSONObject(responseJson);

        System.out.println("Response: " + responseJson);

        String title = jsonObject.getJSONObject("task").get("title").toString();
        Assert.assertEquals("Should return the expected registered title from the retrieved task.", "Title test",title);

    }

    private String getTaskRequestJson(User author, User responsible, String deadline, String title, String description) {

        Task task = new Task(author, responsible, deadline, title, description);
        Gson gson = new Gson();
        String requestJson = gson.toJson(task);
        System.out.println("Request: " + requestJson);
        return requestJson;
    }

}
