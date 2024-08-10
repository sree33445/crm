package com.crm.response;

public class AdminAddUserResponse<T> {
    private String message;
    private boolean success;
    private int statusCode;
    private T data;  // Generic type for flexibility

    public AdminAddUserResponse(String message, boolean success, int statusCode) {
        this.message = message;
        this.success = success;
        this.statusCode = statusCode;
    }

    public AdminAddUserResponse(String message, boolean success, int statusCode, T data) {
        this.message = message;
        this.success = success;
        this.statusCode = statusCode;
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

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
