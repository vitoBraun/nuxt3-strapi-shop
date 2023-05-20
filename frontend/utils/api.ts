export const getApiQueryString = (query: string) => {
  const config = useRuntimeConfig();
  return `http://${config.public.API_HOST}:${config.public.API_PORT}/api/${query}`;
};
