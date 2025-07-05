export default async function Reviews() {
  await new Promise((res) => setTimeout(() => res("all reviews"), 2000));
  return <h2>Reviews</h2>;
}
