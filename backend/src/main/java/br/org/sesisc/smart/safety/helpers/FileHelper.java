package br.org.sesisc.smart.safety.helpers;

public class FileHelper {

    public static final String PDF_TYPE = "application/pdf";

    public static final String PNG_TYPE = "image/png";

    public static final String JPEG_TYPE = "image/jpeg";

    public static final String SVG_TYPE = "image/svg+xml";

    public static final String PATH_DIR = "upload-dir";

    private static final String MP4_TYPE = "video/mp4";

    private static final String MPEG_TYPE = "video/mpeg";

    private static final String QUICKTIME_TYPE = "video/quicktime";

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
            case SVG_TYPE:
                result = ".svg";
                break;
        }
        return result;
    }

    public static boolean checkTypeAndFileContent(String type, String contentType) {
        if (type.equals("logo") || type.equals("image")) {
            return contentType.equals(PNG_TYPE) || contentType.equals(JPEG_TYPE);
        } else if (type.equals("cei")) {
            return contentType.equals(PDF_TYPE);
        } else if (type.equals("blueprint")) {
            return contentType.equals(PNG_TYPE) ||
                    contentType.equals(JPEG_TYPE) ||
                    contentType.equals(SVG_TYPE);
        } else if (type.equals("video")) {
            return contentType.equals(MP4_TYPE) ||
                    contentType.equals(MPEG_TYPE) ||
                    contentType.equals(QUICKTIME_TYPE);
        }

        return false;
    }

    public static boolean checkType(String type) {
        return type.equals("logo") || type.equals("cei");
    }

    public static boolean checkTaskAttachmentType(String type) {
        return type.equals("image") || type.equals("video");
    }
}
