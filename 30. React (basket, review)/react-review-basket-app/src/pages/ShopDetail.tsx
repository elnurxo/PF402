import { addReview, getProductById } from "@/api/requests/product";
import { Product } from "@/types/product";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useFormik } from "formik";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    if (id) {
      getProductById(id).then((prod) => {
        setProduct(prod);
      });
    } else {
      navigate("/shop");
    }
  }, [id, navigate]);

  //formik yup
  const commentFormik = useFormik({
    initialValues: {
      fullName: "",
      comment: "",
    },
    onSubmit: async (values, actions) => {
      const { fullName, comment } = values;
      if (id) {
        const resp = await addReview(id, fullName, comment);
        setProduct({ ...resp.data });
        toast.success("comment posted successfully!");
        actions.resetForm();
      } else {
        toast.error("id is not provided!");
      }
    },
  });

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <button className="px-4 py-2 rounded border-gray-900 border mb-4 cursor-pointer hover:bg-gray-900 hover:text-white transition">
        <Link to={"/shop"}>go back</Link>
      </button>
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <img
          className="w-full h-[350px] object-cover"
          src={product?.imageURL}
          alt={product?.title}
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{product?.title}</h1>
          <h2 className="text-gray-600 text-xl mb-4">
            Category: {product?.category}
          </h2>
          <p className="text-gray-700 mb-6">{product?.description}</p>
          <div className="flex justify-end">
            <button
              data-id={product?.id}
              className="border border-gray-800 hover:bg-gray-800 hover:text-white transition px-4 py-2 rounded flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <ul className="space-y-4">
          {product?.reviews.length === 0 ? (
            <h4 className="text-center text-2xl font-bold text-red-700 underline">
              Not any comments for this product!
            </h4>
          ) : (
            product?.reviews.map((review) => {
              return (
                <li key={review.id} className="border p-4 rounded bg-gray-50">
                  <p className="font-bold">{review.fullName}</p>
                  <p className="text-gray-700 mt-1">{review.comment}</p>
                </li>
              );
            })
          )}
        </ul>
      </div>

      {/* Add Comment Form */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Add a Comment</h3>
        <form onSubmit={commentFormik.handleSubmit} className="space-y-4 mb-8">
          <input
            type="text"
            name="fullName"
            value={commentFormik.values.fullName}
            onChange={commentFormik.handleChange}
            onBlur={commentFormik.handleBlur}
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="comment"
            value={commentFormik.values.comment}
            onChange={commentFormik.handleChange}
            onBlur={commentFormik.handleBlur}
            placeholder="Write your comment..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
