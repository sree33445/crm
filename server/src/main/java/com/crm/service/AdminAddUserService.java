package com.crm.service;

import java.util.List;
import com.crm.entity.User;
import com.crm.response.AdminAddUserResponse;

public interface AdminAddUserService {
    AdminAddUserResponse<List<User>> searchUsers(String searchTerm);
}
