package br.org.sesisc.smart.safety.common;

public enum ManagerType {

    CIVIL_ENGINEER("civil_engineer"),

    WORK_SAFETY("work_safety");

    private String content;

    ManagerType(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}
