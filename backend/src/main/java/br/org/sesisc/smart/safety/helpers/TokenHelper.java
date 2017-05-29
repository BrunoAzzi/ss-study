package br.org.sesisc.smart.safety.helpers;

import org.mindrot.jbcrypt.BCrypt;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;

public class TokenHelper {

    private static TokenHelper instance = null;

    protected TokenHelper() { }

    public static TokenHelper getInstance() {
        if (instance == null) {
            synchronized (TokenHelper.class) {
                if (instance == null) {
                    instance = new TokenHelper();
                }
            }
        }
        return instance;
    }

    public String generateToken() {
        final Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        return BCrypt.hashpw(String.valueOf(timestamp.getTime()), BCrypt.gensalt());
    }

    public String generateExpirableToken(final String key) {
        final String value = String.format("%s%s", key, getTimeStampByQuarterHours());
        return BCrypt.hashpw(value, BCrypt.gensalt(12));
    }

    public boolean isValidExpirableToken(final String key, final String token) {
        final String value = String.format("%s%s", key, getTimeStampByQuarterHours());
        return BCrypt.checkpw(value, token);
    }

    private String getTimeStampByQuarterHours() {
        final Date currentDate = new Date();
        Calendar cal = Calendar.getInstance();
        cal.setTime(currentDate);

        final int unroundedMinutes = cal.get(Calendar.MINUTE);
        final int mod = unroundedMinutes % 15;
        cal.add(Calendar.MINUTE, mod < 8 ? -mod : (15-mod));
        cal.set(Calendar.SECOND,  0);
        cal.set(Calendar.MILLISECOND, 0);

        return String.valueOf(cal.getTime());
    }
}
