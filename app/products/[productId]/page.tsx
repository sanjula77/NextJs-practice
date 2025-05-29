export default async function ProductDetails({params}: {params: {productId: string}}) {
  return (
    <div>
      <h1>Product Details About {params.productId}</h1>
    </div>
  );
}