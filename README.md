# Mermaid API Example

Microservice to embed [mermaid](https://mermaidjs.github.io/) charts in GitHub or whatever static markdown

Use docker and pupetteer to run [mermaid-cli](https://github.com/fardog/mermaid-cli)

Demo : https://mermaid.now.sh

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/revolunet/mermaid-api)

Your mermaid graph is available here : `https://mermaid.now.sh/?q=[MERMAID-DATA]`.

⚠ Be sure to use `encodeURIComponent` to encode the data.

⚠ Doesnt support fontawesome

![demo chart](chart)


[chart]: https://mermaid-api.now.sh/?q=/?width=400&height=600&q=graph%20TD%0AA%5BChristmas%5D%20--%3E%7CGet%20money%7C%20B(Go%20shopping)%0AB%20--%3E%20C%7BLet%20me%20think%7D%0AC%20--%3E%7COne%7C%20D%5BLaptop%5D%0AC%20--%3E%7CTwo%7C%20E%5BiPhone%5D%0AC%20--%3E%7CThree%7C%20F%5BCar%5D%0A
