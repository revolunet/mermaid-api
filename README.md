# Mermaid API Example / DEPRECATED

Microservice to embed [mermaid](https://mermaidjs.github.io/) charts in GitHub or whatever static markdown

Use docker and pupetteer to run [mermaid-cli](https://github.com/fardog/mermaid-cli)

⚠ Be sure to use `encodeURIComponent` to encode the data.

⚠ Doesnt support fontawesome ([pending PR](https://github.com/mermaidjs/mermaid.cli/pull/38))


![demo chart](https://mermaid.now.sh/?width=800&height=600&q=graph%20TD%0Asubgraph%20Baie%20r%C3%A9seau%0ARR(Switch%20r%C3%A9seau)--%3E%7CRJ45%7CE%0AA1(Alim%205V%20micro%20USB)--%3EE(Player%20Audio%20raspi)%0Aend%0Asubgraph%20Salle%20de%20jeu%0AE--%3E%7Ccable%20audio%7CF(HP%20amplifi%C3%A9%201)%0AA2(Alim%20PC16)--%3EF%0AF-.-%3E%7Ccable%20audio%7CG(HP%20amplifi%C3%A9%202)%0AA3(Alim%20PC16)--%3EG%0AW1(Webcam%20D5020L)%0AR1(Arriv%C3%A9e%20RJ45)--%3EW1%0AA4(Alim%20PC16)--%3EW1%0Aend)
