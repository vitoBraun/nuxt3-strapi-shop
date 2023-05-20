export default function useItems() {
  const { data: items } = useFetch(getApiQueryString("items"), {
    params: { category: "boats", populate: "*" },
    transform: (res: any) => {
      return res["data"];
    },
  });

  return items;
}
