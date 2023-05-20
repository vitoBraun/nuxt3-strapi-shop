export default function useItems(category: string = "boats") {
  const { data: items, refresh } = useFetch(getApiQueryString("items"), {
    params: { category, populate: "*" },
    transform: (res: any) => {
      return res["data"];
    },
  });

  return { items, refresh };
}
