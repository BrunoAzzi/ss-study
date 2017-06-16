package br.org.sesisc.smart.safety.service;

import org.springframework.web.multipart.MultipartFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;
public interface StorageService {

    void store(MultipartFile file);

    Resource loadFile(String filename);

    void init();

    void deleteAll();
}
