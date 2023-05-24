const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

const character = {
  id: 3011,
  name: "Nicox",
  species: "Human",
  gender: "Male",
  status: "Alive",
  origin: {
    name: "Earth (C-137)",
  },
  image: "image.jpg",
};

describe("test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.statusCode).toEqual(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      for (const prop in character) {
        expect(response.body).toHaveProperty(prop);
      }
    });
    it("Si hay un error responde con status: 500", async () => {
      const response = await agent.get("/rickandmorty/character/320j");
      expect(response.statusCode).toBe(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Responde con access en true si la informacion del usuario es validad", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=claverostyle@gmail.com&password=asd1234"
      );
      const access = { access: true };
      expect(response.body).toEqual(access);
    });
    it("Responde con access en false si la informacion del usuario no es valida", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=claverostyle@mail.com&password=ajg1234"
      );
      const access = { access: false };
      expect(response.body).toEqual(access);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Guarda el personaje en favorito", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character);
      console.log(response.body);
      expect(response.body).toContainEqual(character);
    });
    it("Agrega un personaje a favoritos sin eliminar los demas", async () => {
      character.id = 0806;
      character.name = "";
      const response = await agent.post("/rickandmorty/fav").send(character);
    });
  });
});
