package br.org.sesisc.smart.safety.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

@Service("StorageService")
public class StorageServiceImpl implements StorageService {

    private final Path rootLocation = Paths.get("upload-dir");

    @Override
    public String store(MultipartFile file) {
        String fileName = null;
        try {
            fileName = String.valueOf(new Date().getTime());
            Files.copy(file.getInputStream(), this.rootLocation.resolve(fileName));
        } catch (Exception e) {
            throw new RuntimeException("FAIL!");
        }
        return fileName;
    }

    @Override
    public Resource loadFile(String filename) {
        try {
            Path file = rootLocation.resolve(filename);
            Resource resource = new UrlResource(file.toUri());
            if(resource.exists() || resource.isReadable()) {
                return resource;
            } else{
                throw new RuntimeException("FAIL!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("FAIL!");
        }
    }

    @Override
    public void init() {
        try {
            Files.createDirectory(rootLocation);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize storage!");
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(rootLocation.toFile());
    }
}
