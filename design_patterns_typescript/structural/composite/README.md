# 🌳 Composite Pattern (Padrão de Composição)

## 🧠 O que é?

O **Composite Pattern** é um padrão estrutural que permite **tratar objetos individuais e composições de objetos de maneira uniforme**.

Ele é ideal para representar **estruturas em árvore**, onde um objeto pode conter outros objetos.

---

## ✅ Quando usar

- Quando você precisa representar **hierarquias de objetos**.
- Quando deseja **tratar objetos e coleções de objetos da mesma maneira**.
- Quando quer aplicar **operações recursivas** em estruturas compostas.

**Exemplos reais:**
- Sistema de pastas e arquivos
- Estruturas organizacionais de empresas
- Menus e submenus de interfaces

---

## 🚫 Quando evitar

- Quando não existe necessidade real de composição (árvore).
- Quando a estrutura é muito simples e o padrão adicionaria complexidade desnecessária.

---

## 💡 Exemplo prático: Estrutura Organizacional de uma Empresa

Neste exemplo, temos:
- **Developers**: funcionários individuais
- **Managers**: podem gerenciar Developers e outros Managers

Um Manager pode ter vários membros em sua equipe e a estrutura pode ser exibida recursivamente.

---

## 💻 Implementação em TypeScript

### Interface Employee

```ts
export interface Employee {
  getName(): string;
  getSalary(): number;
  showDetails(indent?: string): void;
}
```

### Classe Developer

```ts
export class Developer implements Employee {
  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  showDetails(indent: string = ""): void {
    console.log(\`\${indent}- Desenvolvedor: \${this.name} | Salário: R$\${this.salary}\`);
  }
}
```

### Classe Manager

```ts
export class Manager implements Employee {
  private team: Employee[] = [];

  constructor(private name: string, private salary: number) {}

  add(employee: Employee): void {
    this.team.push(employee);
  }

  remove(employee: Employee): void {
    this.team = this.team.filter(e => e !== employee);
  }

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  showDetails(indent: string = ""): void {
    console.log(\`\${indent}+ Gerente: \${this.name} | Salário: R$\${this.salary}\`);
    for (const employee of this.team) {
      employee.showDetails(indent + "  ");
    }
  }
}
```

### Uso no sistema

```ts
const dev1 = new Developer("Alice", 8000);
const dev2 = new Developer("Bob", 7500);
const dev3 = new Developer("Carol", 7000);

const manager1 = new Manager("Daniel", 15000);
manager1.add(dev1);
manager1.add(dev2);

const ceo = new Manager("Renan (CEO)", 30000);
ceo.add(manager1);
ceo.add(dev3);

ceo.showDetails();
```

---

## 🧪 Benefícios

- Tratar objetos individuais e compostos de forma consistente
- Estruturas hierárquicas simples de percorrer
- Facilita operações recursivas em estruturas complexas

---

## ⚠️ Cuidados

- Pode adicionar complexidade desnecessária se a hierarquia não for necessária
- Requer atenção para evitar ciclos e loops infinitos

---

## 📚 Resumo

| Prós                              | Contras                        |
|-----------------------------------|---------------------------------|
| Tratar objetos e coleções de forma uniforme | Estrutura pode ficar complexa |
| Facilita percorrer árvores        | Requer cuidado com a modelagem |
| Ideal para hierarquias            | Pode ser overkill para estruturas simples |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
