import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getAllEmployees() {
    return axios.get(REST_API_URL);
  }

  createEmployee(employee) {
    return axios.post(REST_API_URL, employee);
  }

  getEmployeeById(id) {
    return axios.get(`${REST_API_URL}/${id}`);
  }

  updateEmployee(id, employee) {
    return axios.put(`${REST_API_URL}/${id}`, employee);
  }

  deleteEmployee(id) {
    return axios.delete(`${REST_API_URL}/${id}`);
  }
}

export default new EmployeeService();
