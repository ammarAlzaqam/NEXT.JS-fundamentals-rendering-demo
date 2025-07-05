interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { id } = await params;
  return (
    <div>
      Product {id} details rendered at {new Date().toLocaleString()}
    </div>
  );
}
