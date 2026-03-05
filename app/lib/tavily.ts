export async function fetchMacroNews(query: string = "global macro economics inflation interest rates") {
    const apiKey = process.env.TAVILY_API_KEY;
    if (!apiKey || apiKey.includes('xxx')) {
        console.warn("TAVILY_API_KEY is missing or invalid, using mocked data for build.");
        return [
            { url: 'https://reuters.com/article1', title: 'US Fed holds rates steady', content: 'The Federal Reserve kept interest rates steady at 5.25%-5.50%.' },
            { url: 'https://bloomberg.com/article2', title: 'Rates unchanged amid inflation worries', content: 'Officials chose to keep rates at 5.25%-5.50% in the latest meeting.' }
        ];
    }

    // Only trust Tier 1 sources explicitly defined in requirements
    const trustedDomains = [
        "reuters.com",
        "bloomberg.com",
        "apnews.com",
        "ft.com",
        "wsj.com"
    ];

    const response = await fetch("https://api.tavily.com/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            api_key: apiKey,
            query: query,
            search_depth: "advanced",
            include_domains: trustedDomains,
            max_results: 15,
            days: 1
        }),
    });

    if (!response.ok) {
        throw new Error(`Tavily API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results || [];
}
