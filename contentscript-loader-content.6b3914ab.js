(function () {
            (async () => {
                  await import(
                    chrome.runtime.getURL("assets/content.6b3914ab.js")
                  );
                })().catch(console.error);
            })();