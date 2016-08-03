export default (href, params) => {
    const url = new URL(href);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return url;
}