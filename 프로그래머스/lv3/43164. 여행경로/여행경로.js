function solution(tickets) {
    const graph = buildGraph(tickets);
    const route = ["ICN"];

    return dfs(graph, route, tickets.length + 1);
}

function buildGraph(tickets) {
    const graph = {};

    for (const ticket of tickets) {
        const [from, to] = ticket;
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    }

    for (const key in graph) {
        graph[key].sort();
    }

    return graph;
}

function dfs(graph, route, targetLength) {
    const currentAirport = route[route.length - 1];

    if (route.length === targetLength) {
        return route;
    }

    if (graph[currentAirport]) {
        const destinations = graph[currentAirport];
        for (let i = 0; i < destinations.length; i++) {
            const destination = destinations[i];
            destinations.splice(i, 1);
            route.push(destination);
            const result = dfs(graph, route, targetLength);
            if (result) {
                return result;
            }
            route.pop();
            destinations.splice(i, 0, destination);
        }
    }

    return null;
}
