package br.org.sesisc.smart.safety.models;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class UserTest {

    private User user;

    @Before
    public void setUp() throws Exception {
        user = new User();
    }

    @Test
    public void digestUserPassword_WithUnencryptedPassword_ShouldSucceed() throws Exception {
        final String unencryptedPassword = "secret";
        user.digestPassword(unencryptedPassword);
        Assert.assertNotEquals(unencryptedPassword, user.getPassword());
    }

    @Test
    public void authenticateUser_WithCorrectPasswordAndInactivated_ShouldThrow() throws Exception {
        final String passwordText = "secret";
        user.setActive(false);
        user.digestPassword(passwordText);
        boolean result = user.authenticate(passwordText);
        Assert.assertFalse(result);
    }

    @Test
    public void authenticateUser_WithIncorrectPassword_ShouldThrow() throws Exception {
        final String passwordText = "secret";
        user.setActive(true);
        user.digestPassword("correctPassword");
        boolean result = user.authenticate(passwordText);
        Assert.assertFalse(result);
    }

    @Test
    public void authenticateUser_WithCorrectPassword_ShouldSucceed() throws Exception {
        final String passwordText = "secret";
        user.setActive(true);
        user.digestPassword(passwordText);
        boolean result = user.authenticate(passwordText);
        Assert.assertTrue(result);
    }

}