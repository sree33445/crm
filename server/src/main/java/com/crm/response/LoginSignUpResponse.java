package com.crm.response;

public class LoginSignUpResponse {
    private String message;
    private boolean success;
    private int statusCode;
    private String role;
    private String data;

    public LoginSignUpResponse(String message, boolean success, int statusCode) {
        this.message = message;
        this.success = success;
        this.statusCode = statusCode;
    }

    public LoginSignUpResponse(String message, boolean success, int statusCode, String role) {
        this.message = message;
        this.success = success;
        this.statusCode = statusCode;
        this.role = role;
    }

    public LoginSignUpResponse(String message, boolean success, int statusCode, String role, String data) {
        this.message = message;
        this.success = success;
        this.statusCode = statusCode;
        this.role = role;
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

}
