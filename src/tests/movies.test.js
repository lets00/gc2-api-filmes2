import request from "supertest";
import app from "../app.js";

describe("Teste do endpoint /filmes", () => {
  it("Deve ser capaz de obter todos os filmes adicionados no array", async () => {
    const resultado = await request(app).get("/api/filmes");
    expect(resultado.status).toBe(200);
    expect(resultado.body.length).toBe(6);
    expect(resultado.body == null).toBe(false);
  });
});
