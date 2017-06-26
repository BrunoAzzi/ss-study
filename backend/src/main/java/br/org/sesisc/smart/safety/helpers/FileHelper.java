package br.org.sesisc.smart.safety.helpers;

public class FileHelper {

    public static final String PDF_TYPE = "application/pdf";

    public static final String PNG_TYPE = "image/png";

    public static final String JPEG_TYPE = "image/jpeg";

    public static final String PATH_DIR = "upload-dir";

    public static String getNameType(String type) {
        String result = "";
        switch (type) {
            case PDF_TYPE:
                result = ".pdf";
                break;
            case PNG_TYPE:
                result = ".png";
                break;
            case JPEG_TYPE:
                result = ".jpeg";
                break;
        }
        return result;
    }
}
