# 🧠 Flyweight Pattern (Padrão de Peso-Mosca)

## 🧠 O que é?

O **Flyweight Pattern** é um padrão estrutural que **otimiza o uso de memória** compartilhando instâncias de objetos que são repetidos em grande quantidade.

Ao invés de criar múltiplas cópias de objetos iguais, reutilizamos uma única instância.

---

## ✅ Quando usar

- Quando o sistema precisa **criar muitos objetos similares** (milhares ou milhões).
- Quando os objetos **compartilham informações** que podem ser armazenadas em uma única instância.
- Quando precisa **reduzir consumo de memória** e melhorar a performance.

**Exemplos reais:**
- Representação de árvores em um jogo de mundo aberto
- Ícones em mapas
- Caracteres em editores de texto

---

## 🚫 Quando evitar

- Quando o número de objetos é pequeno e a otimização não traz ganho real.
- Quando a lógica de compartilhamento gera mais complexidade que benefício.

---

## 💡 Exemplo prático: Ícones em Mapa

Imagine um mapa onde temos:
- Hospitais
- Restaurantes
- Escolas

Cada ponto precisa de um ícone.  
Ao invés de criar um novo ícone para cada ponto, usamos **apenas uma instância por tipo**.

---

## 💻 Implementação em TypeScript

### Componentes

- `Icon`: representa o ícone compartilhado.
- `IconFactory`: gerencia a criação e reutilização dos ícones.
- `Main`: simula a criação de pontos no mapa.

A fábrica verifica se o ícone já existe:
- Se sim, reutiliza.
- Se não, cria um novo.

---

## 🧪 Benefícios

- Redução significativa do uso de memória.
- Melhora de performance em sistemas que manipulam muitos objetos.
- Padronização de objetos repetidos.

---

## ⚠️ Cuidados

- O gerenciamento das instâncias compartilhadas pode aumentar a complexidade.
- Mudanças de estado inesperadas em objetos compartilhados podem causar problemas.

---

## 📚 Resumo

| Prós                           | Contras                        |
|---------------------------------|---------------------------------|
| Reduz consumo de memória        | Exige cuidado na gestão de instâncias |
| Melhora a performance           | Pode adicionar complexidade     |
| Ótimo para objetos imutáveis     | Pode gerar bugs se objetos forem mutáveis |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
