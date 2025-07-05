export default async function Product() {
  await new Promise((res) => setTimeout(() => res("product data"), 4000));
  return <h1>Product details</h1>;
}
