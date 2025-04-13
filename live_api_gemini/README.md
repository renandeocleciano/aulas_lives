# 📄 Resume Scanner API (OCR + Gemini + TypeScript)

Uma API em Node.js com TypeScript que recebe **currículos em PDF** e utiliza **IA (Gemini 1.5)** para extrair informações estruturadas como nome, email, habilidades e experiências.

Material utilizado na live realizada no dia 05/04/2025

---

## 🚀 Tecnologias Utilizadas

- [x] Node.js + TypeScript
- [x] Express
- [x] Arquitetura limpa (Clear Architecture)
- [x] Google Gemini 1.5 (Vision)
- [x] Multer (upload de arquivos)
- [x] dotenv
- [x] Jest + Supertest (testes)
- [x] Clean Code + SOLID

---

## 📦 Instalação

```bash
git clone https://github.com/renandeocleciano/aulas_lives.git
cd aulas_lives
npm install
```

---

## 🔐 Configuração do Ambiente

Crie um arquivo `.env`:

```env
GEMINI_API_KEY=sua_chave_gemini_aqui
PORT=3000
```

Você pode obter sua chave em: [https://makersuite.google.com/app](https://makersuite.google.com/app)

---

## ▶️ Executar API

### Desenvolvimento:
```bash
npm run dev
```

### Produção:
```bash
npm run build && npm start
```

---

## 📤 Enviar PDF via Insomnia

1. Crie uma requisição `POST` para:
   ```
   http://localhost:3000/api/resumes/analyze
   ```

2. Vá em **Body → Multipart Form**  
3. Adicione:
   - **file** (tipo: arquivo) → selecione um PDF de currículo

---

## ✅ Exemplo de Retorno

```json
{
  "data": {
    "name": "Juliana Costa",
    "email": "juliana.costa@email.com",
    "skills": ["React", "Next.js", "Tailwind CSS"],
    "experience": [
      {
        "company": "FrontApp",
        "position": "Frontend Developer Pleno",
        "period": "2020 - Atual"
      }
    ],
    "education": "UFMG, Sistemas de Informação (2015 - 2019)"
  }
}
```

---

## 🧪 Rodar Testes

```bash
npm test
```

Inclui testes automatizados com `supertest` e mocks do Gemini.

---

## 💡 Estrutura de Pastas (Clear Architecture)

```
src/
├── application/
│   └── use-cases/
├── domain/
├── infrastructure/
│   ├── controllers/
│   ├── routes/
│   └── services/
├── shared/
├── __tests__/
└── main.ts
```

---

## 📚 Licença

Projeto didático para fins educacionais (by Renan Tavares).