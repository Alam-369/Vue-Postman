import http from "./api";

class dataService {
  getAll() {
    return http.get("/login");
  }

  get(id: string) {
    return http.get(`/user/${id}`);
  }

  create(data: any) {
    return http.post("/tutorials", data);
  }

  update(id: string, data: any) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title: string) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new dataService();