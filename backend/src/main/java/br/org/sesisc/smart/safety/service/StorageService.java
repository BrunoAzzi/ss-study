package br.org.sesisc.smart.safety.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;
public interface StorageService {

    String store(MultipartFile file);

    Resource loadFile(String filename);

    void init();

    void deleteAll();
}
