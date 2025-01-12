---
title: "Config Hub"
description: "Your gateway to config providers"
ShowToc: false
---

Explore a variety of config providers. Compare options, choose the best fit for your needs, and get redirected to their platform to purchase or start using their services for the Invisible Man XRay effortlessly.

Are you a provider? Click [here]() to learn how you can share your service on Config Hub.

{{< rawhtml >}}
    
    <p id="status-text" class="config-hub-status-text">Fetching data...</p>
    <div id="config-container" class="config-hub-cards-container"></div>

    <script>
        window.onload = () => {
            const url = "/data/Providers.dat";
            const statusText = document.getElementById("status-text");
            const configContainer = document.getElementById("config-container");

            fetch(url, {
                headers: {
                    "Cache-Control": "no-cache"
                }
            }).then(
                response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                return response.json();
            }).then(data => {
                showData(data);
            }).catch(error => {
                console.error("Error fetching data:", error);
            });

            function showData(data) {
                if (data.providers.length == 0) {
                    statusText.textContent = "No config providers found.";
                    return;
                }

                statusText.style.display = "none";

                let container = "";
                data.providers.forEach(provider => {
                    container += createProviderElement(provider);
                });

                configContainer.innerHTML = container;
            }

            function createProviderElement(provider) {
                return `
                    <div class="config-hub-card">
                        <p class="config-hub-title">${provider.title}</p>
                        <p class="config-hub-description">${provider.description}</p>
                        <div class="config-hub-tags">
                            ${fetchTagsForProvider(provider)}
                            <img class="config-hub-flag" src="https://flagsapi.com/${provider.flag.toUpperCase()}/shiny/64.png"/>
                        </div>
                        <form action="${provider.link}" target="_blank">
                            <input class="config-hub-button button" type="submit" value="Visit">
                        </form>
                    </div>
                `;
            }

            function fetchTagsForProvider(provider) {
                const tagsColor = new Map([
                    ["free", "#00ff4c83"],
                    ["paid", "#ffa60083"]
                ]);

                let tags = "";
                provider.tags.forEach(tag => {
                    tags += `
                        <p class="config-hub-tag" style="background-color:${tagsColor.get(tag)}">${tag.toUpperCase()}</p>
                    `;
                });

                return tags;
            }
        };
    </script>

{{< /rawhtml >}}