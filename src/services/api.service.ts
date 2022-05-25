import http from "./http-common";
class ApiService {
  getAll() {
    return http.get("/tutorials");
  }
  login(payload: any) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;",
        Cookie:
          "x-ms-cpim-sso:deveppopay.onmicrosoft.com_0=m1.Ux1P6Bb+IFOZq1d1.0KTY+w6nnvZiIaYHAevIjQ==.0./dHDHv8WKuWCFemi9n56g65/gVURFEAhrHbGcMi8MEoeqK8RRIL65aRjPiM+nDvUI6ondkvR08bnSJtA/Q+M5JSRUWKu4OtuvodpQqeu3OO/0Ija3gDRA5E2ybjnCvkoSZtTtWUUpXmll9i3AFU/oBUOmDqXTBJF1NK6SSp0doq1/ixA7ZGuLwESzOd7LZqmyrq6vB0BpaN5JrEAW0unpNldY991wXDTNzDMPTgYNP8=",
      },
    };

    return http.post("/tutorials", payload, config);
  }
}
export default new ApiService();
