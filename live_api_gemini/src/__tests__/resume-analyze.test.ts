import express from "express";
import path from "path";
import request from "supertest";
import mockRoutes from "./mocks/mock.routes";

const app = express();
app.use(express.json());
app.use("/api/resumes", mockRoutes);

describe("POST /api/resumes/analyze", () => {
  it("deve analisar um currículo PDF e retornar os dados estruturados", async () => {
    const filePath = path.join(__dirname, "../../curriculos/Juliana_Costa.pdf");

    const response = await request(app)
      .post("/api/resumes/analyze")
      .attach("file", filePath);

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("name");
    expect(response.body.data).toHaveProperty("email");
    expect(response.body.data).toHaveProperty("skills");
    expect(response.body.data).toHaveProperty("experience");
  }, 10000); // aumentar timeout por causa da chamada à Gemini
});
