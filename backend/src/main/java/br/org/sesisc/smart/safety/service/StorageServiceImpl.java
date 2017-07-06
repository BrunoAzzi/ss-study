package br.org.sesisc.smart.safety.service;

import br.org.sesisc.smart.safety.exceptions.ConstructionException;
import br.org.sesisc.smart.safety.helpers.FileHelper;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;

import static br.org.sesisc.smart.safety.helpers.FileHelper.PATH_DIR;

@Service("StorageService")
public class StorageServiceImpl implements StorageService {

    private final Path rootLocation = Paths.get(PATH_DIR);


    @Override
    public String store(MultipartFile file) {
        String fileName = null;
        try {
            Date date = new Date();
            fileName = String.valueOf(date.getTime() + FileHelper.getNameType(file.getContentType()));
            Files.copy(file.getInputStream(), this.rootLocation.resolve(fileName));
        } catch (Exception e) {
            throw new ConstructionException("Erro ao armazenar o arquivo.");
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
            } else {
                throw new ConstructionException("Falha ao carregar o arquivo.");
            }
        } catch (MalformedURLException e) {
            throw new ConstructionException("Falha ao carregar o arquivo.");
        }
    }

    @Override
    public void init() {
        try {
            if (!Files.exists(rootLocation)) {
                Files.createDirectory(rootLocation);
            }
        } catch (IOException e) {
            throw new ConstructionException("Could not initialize storage!");
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(rootLocation.toFile());
    }
}
