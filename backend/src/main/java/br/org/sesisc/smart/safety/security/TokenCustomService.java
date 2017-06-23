package br.org.sesisc.smart.safety.security;

import br.org.sesisc.smart.safety.models.User;
import br.org.sesisc.smart.safety.repositories.UserRepository;
import net.sf.ehcache.Cache;
import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.core.Authentication;

public class TokenCustomService {

    @Autowired
    private UserRepository repository;

    private static Cache restApiAuthTokenCache;
    private static final int HALF_AN_HOUR_IN_MILLISECONDS = 30 * 60 * 1000;

    public TokenCustomService() {
        restApiAuthTokenCache = loadCache();
    }

    @Scheduled(fixedRate = HALF_AN_HOUR_IN_MILLISECONDS)
    public void evictExpiredTokens() {
        restApiAuthTokenCache.evictExpiredElements();
    }

    public void store(String token, Authentication authentication) {
        restApiAuthTokenCache.put(new Element(token, authentication));
    }

    public boolean contains(String token, Authentication authentication) {

        User user = repository.findByToken(token);

        if (user != null && restApiAuthTokenCache.get(token) == null) {
            authentication.setAuthenticated(true);
            this.store(token, authentication);
        }

        return restApiAuthTokenCache.get(token) != null;
    }

    public Authentication retrieve(String token) {
        return (Authentication) restApiAuthTokenCache.get(token).getObjectValue();
    }

    private Cache loadCache() {
        CacheManager cm = CacheManager.getInstance();
        if(!cm.cacheExists("restApiAuthTokenCache")) {
            cm.addCache("restApiAuthTokenCache");
        }

        return CacheManager.getInstance().getCache("restApiAuthTokenCache");
    }

}
