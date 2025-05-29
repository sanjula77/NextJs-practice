export default async function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  let reviewText = null;
  if (params.reviewId === "1") {
    reviewText = <p>This is a great product!</p>;
  } else if (params.reviewId === "2") {
    reviewText = <p>This product is okay.</p>;
  } else if (params.reviewId === "3") {
    reviewText = <p>This product is not good.</p>;
  }
  return (
    <div>
      <h1>
        Review Details for Product {params.productId} Review {params.reviewId}
      </h1>
      {reviewText}
    </div>
  );
}
