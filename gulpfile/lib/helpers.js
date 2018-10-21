export const isProduction = process.env.NODE_ENV === "production";

export function fetchData(file) {
  console.log(file.basename);
  return {
    title: "Hello World",
  };
}
