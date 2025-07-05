import Product from "@/components/product";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

export default function ProductReviews() {
  return (
    <section>
      <h1>Product Reviews Page</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews...</p>}>
        <Reviews />
      </Suspense>
    </section>
  );
}
