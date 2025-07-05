import Link from "next/link";

export default function Products() {
  return (
    <section>
      <h1>Projects List</h1>
      <ul>
        <li>
          <Link href="/products/1">product 1</Link>
        </li>
        <li>
          <Link href="/products/1">product 2</Link>
        </li>
        <li>
          <Link href="/products/1">product 3</Link>
        </li>
      </ul>
    </section>
  );
}
